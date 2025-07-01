require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const templates = require('./initial-templates.json');

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

async function seedTemplates() {
  try {
    console.log('Conectando ao MongoDB...');
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(MONGODB_DB);

    console.log('Limpando coleções existentes...');
    await db.collection('templates').deleteMany({});
    await db.collection('userFavorites').deleteMany({});

    // Preparar templates com informações adicionais
    const templatesWithMetadata = templates.templates.map((template) => ({
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
             '#9C27B0',
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    console.log('Inserindo templates...');
    await db.collection('templates').insertMany(templatesWithMetadata);

    console.log('✅ Templates inseridos com sucesso!');
    await client.close();
  } catch (error) {
    console.error('❌ Erro ao inserir templates:', error);
    console.error(error);
    process.exit(1);
  }
}

seedTemplates(); 