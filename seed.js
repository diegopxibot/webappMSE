require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

async function seedTemplates() {
  try {
    console.log('Conectando ao MongoDB...');
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(MONGODB_DB);

    // Ler o arquivo de templates
    const templatesData = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'scripts', 'initial-templates.json'), 'utf8')
    );

    console.log('Limpando coleções existentes...');
    await db.collection('templates').deleteMany({});

    // Preparar templates com informações adicionais
    const templatesWithMetadata = templatesData.templates.map((template) => ({
      ...template,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    console.log('Inserindo templates...');
    await db.collection('templates').insertMany(templatesWithMetadata);

    console.log('✅ Templates inseridos com sucesso!');
    await client.close();
  } catch (error) {
    console.error('❌ Erro ao inserir templates:', error);
    process.exit(1);
  }
}

seedTemplates(); 