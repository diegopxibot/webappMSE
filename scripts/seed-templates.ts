import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import initialTemplates from './initial-templates.json';

config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor defina a variável de ambiente MONGODB_URI');
}

const categories = [
  {
    name: "Versículos",
    slug: "versiculos",
    icon: "📖",
    description: "Designs para compartilhar a Palavra de Deus",
    styles: ["Moderno", "Minimalista", "Clássico", "Artístico", "Natureza"]
  },
  {
    name: "Orações",
    slug: "oracoes",
    icon: "🙏",
    description: "Designs para momentos de conexão com Deus",
    styles: ["Sereno", "Minimalista", "Contemplativo", "Natureza", "Moderno"]
  },
  {
    name: "Reflexões",
    slug: "reflexoes",
    icon: "💭",
    description: "Designs para compartilhar momentos de meditação e sabedoria",
    styles: ["Amanhecer", "Minimalista", "Contemplativo", "Natureza", "Moderno"]
  },
  {
    name: "Convites",
    slug: "convites",
    icon: "✉️",
    description: "Designs para convidar pessoas para momentos especiais de fé",
    styles: ["Moderno", "Minimalista", "Clássico", "Jovem", "Formal"]
  },
  {
    name: "Anúncios de Culto",
    slug: "anuncios-culto",
    icon: "📢",
    description: "Designs para divulgar cultos e celebrações especiais",
    styles: ["Festivo", "Moderno", "Acolhedor", "Tradicional", "Contemporâneo"]
  },
  {
    name: "Frases de Fé",
    slug: "frases-fe",
    icon: "🕊️",
    description: "Designs para compartilhar mensagens inspiradoras de fé",
    styles: ["Inspirador", "Sereno", "Motivacional", "Minimalista", "Artístico"]
  },
  {
    name: "Datas Especiais",
    slug: "datas-especiais",
    icon: "🎉",
    description: "Designs para celebrar momentos significativos do calendário cristão",
    styles: ["Celebrativo", "Festivo", "Amoroso", "Tradicional", "Moderno"]
  },
  {
    name: "Evangelismo em Dupla",
    slug: "evangelismo-dupla",
    icon: "🧑‍🤝‍🧑",
    description: "Designs para compartilhar o evangelho em parceria",
    styles: ["Dinâmico", "Sereno", "Missionário", "Moderno", "Tradicional"]
  },
  {
    name: "Frases de Impacto",
    slug: "frases-impacto",
    icon: "💬",
    description: "Designs para compartilhar mensagens poderosas que tocam corações",
    styles: ["Impactante", "Energético", "Motivacional", "Ousado", "Moderno"]
  }
]

async function seedTemplates() {
  try {
    const client = await MongoClient.connect(MONGODB_URI as string);
    const db = client.db();

    // Limpar coleções existentes
    await db.collection('templates').deleteMany({});
    await db.collection('userFavorites').deleteMany({});

    // Preparar templates com informações adicionais
    const templatesWithMetadata = initialTemplates.templates.map((template) => ({
      ...template,
      color: template.style === 'Natureza' ? '#4CAF50' :
             template.style === 'Moderno' ? '#2196F3' :
             template.style === 'Minimalista' ? '#9E9E9E' :
             template.style === 'Sereno' ? '#03A9F4' :
             template.style === 'Contemplativo' ? '#673AB7' :
             template.style === 'Amanhecer' ? '#FF9800' :
             template.style === 'Festivo' ? '#E91E63' :
             template.style === 'Acolhedor' ? '#795548' :
             template.style === 'Inspirador' ? '#FFC107' :
             template.style === 'Motivacional' ? '#F44336' :
             template.style === 'Dinâmico' ? '#00BCD4' :
             template.style === 'Missionário' ? '#8BC34A' :
             template.style === 'Energético' ? '#FF5722' :
             '#9C27B0', // Cor padrão para outros estilos
      variations: generateVariations(template),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    // Inserir templates
    await db.collection('templates').insertMany(templatesWithMetadata);

    console.log('✅ Templates inseridos com sucesso!');
    await client.close();
  } catch (error) {
    console.error('❌ Erro ao inserir templates:', error);
    process.exit(1);
  }
}

function generateVariations(template: any) {
  // Gerar 2-3 variações do template com estilos diferentes
  const possibleStyles = [
    'Minimalista',
    'Moderno',
    'Natureza',
    'Contemplativo',
    'Sereno',
    'Dinâmico',
    'Energético',
  ].filter(style => style !== template.style);

  const numberOfVariations = Math.floor(Math.random() * 2) + 2; // 2-3 variações
  const variations = [];

  for (let i = 0; i < numberOfVariations; i++) {
    const style = possibleStyles[i];
    variations.push({
      id: `${template.id}-var-${i + 1}`,
      style,
      imageUrl: template.imageUrl.replace('.jpg', `-${i + 1}.jpg`),
      previewUrl: template.previewUrl.replace('.jpg', `-${i + 1}.jpg`),
    });
  }

  return variations;
}

seedTemplates(); 