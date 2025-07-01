import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { connectToDatabase } from '@/lib/mongodb';
import TemplatesClient from './TemplatesClient';
import { Suspense } from 'react';
import { WithId } from 'mongodb';

interface Template {
  id: string
  title: string
  imageUrl: string
  previewUrl: string
  downloadUrl: string
  style: string
  color: string
  suggestedCaption: string
  categorySlug: string
  variations?: {
    id: string
    style: string
    imageUrl: string
    previewUrl: string
  }[]
  downloadCount?: number
  tags: string[]
  active: boolean
  createdAt: Date
}

interface TemplatesByCategory {
  [key: string]: Template[]
}

async function getTemplatesData() {
  const { db } = await connectToDatabase();
  
  // Buscar templates e favoritos do usuário
  const templatesData = await db.collection('templates')
    .find({ active: true })
    .sort({ downloadCount: -1, createdAt: -1 })
    .toArray();

  // Converter os documentos do MongoDB para o formato Template
  const templates: Template[] = templatesData.map((doc: WithId<any>) => ({
    id: doc._id.toString(),
    title: doc.title,
    imageUrl: doc.imageUrl,
    previewUrl: doc.previewUrl,
    downloadUrl: doc.downloadUrl,
    style: doc.style,
    color: doc.color,
    suggestedCaption: doc.suggestedCaption,
    categorySlug: doc.categorySlug,
    variations: doc.variations,
    downloadCount: doc.downloadCount,
    tags: doc.tags,
    active: doc.active,
    createdAt: doc.createdAt
  }));
  
  // Extrair cores e estilos únicos
  const colors = Array.from(new Set(templates.map(t => t.color)));
  const styles = Array.from(new Set(templates.map(t => t.style)));
  
  // Agrupar templates por categoria
  const templatesByCategory = templates.reduce<TemplatesByCategory>((acc, template) => {
    const category = template.categorySlug;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(template);
    return acc;
  }, {});
  
  return {
    templates,
    templatesByCategory,
    colors,
    styles
  };
}

async function getUserFavorites(userId: string) {
  const { db } = await connectToDatabase();
  const favorites = await db.collection('userFavorites')
    .findOne({ userId }, { projection: { templateIds: 1 } });
  return favorites?.templateIds || [];
}

export default async function TemplatesPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  const { templates, templatesByCategory, colors, styles } = await getTemplatesData();
  const favoriteIds = await getUserFavorites(session.user.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#0A0B2E]">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Templates Visuais
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Escolha entre nossa coleção de templates profissionais para criar stories impactantes para seu ministério.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(templatesByCategory).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-white mb-1">
                {Array.isArray(items) ? items.length : 0}
              </div>
              <div className="text-sm text-white/60 capitalize">
                {category.replace(/-/g, ' ')}
              </div>
            </div>
          ))}
        </div>

        {/* Templates Grid com Loading State */}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-[9/16] rounded-2xl bg-white/5 animate-pulse"
                />
              ))}
            </div>
          }
        >
          <TemplatesClient
            initialTemplates={templates}
            initialFavorites={favoriteIds}
            availableColors={colors}
            availableStyles={styles}
            userId={session.user.id}
          />
        </Suspense>
      </div>
    </div>
  );
}