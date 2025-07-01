import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
  throw new Error('Por favor defina a variável de ambiente MONGODB_URI');
}

async function seedTemplates() {
  try {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(MONGODB_DB);

    // Carregar templates do arquivo JSON
    const templatesData = JSON.parse(
      await readFile(join(__dirname, 'initial-templates.json'), 'utf8')
    );

    // Limpar coleções existentes
    await db.collection('templates').deleteMany({});
    await db.collection('userFavorites').deleteMany({});

    // Preparar templates com informações adicionais
    const templatesWithMetadata = templatesData.templates.map((template) => ({
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

function generateVariations(template) {
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