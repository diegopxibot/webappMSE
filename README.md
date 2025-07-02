# MSE - Método Stories Evangelístico

## 📱 Templates Visuais

O módulo de Templates Visuais do MSE é uma ferramenta poderosa para criar conteúdo visual para redes sociais, especialmente Instagram Stories. Com uma variedade de templates em diferentes categorias, você pode criar conteúdo evangelístico profissional em minutos.

### ✨ Funcionalidades

- 🎨 Templates em várias categorias:
  - Versículos
  - Orações
  - Reflexões
  - Convites
  - Anúncios de Culto
  - Frases de Fé
  - Datas Especiais
  - Evangelismo em Dupla
  - Frases de Impacto

- 🔍 Sistema de busca e filtros:
  - Busca por texto
  - Filtro por estilo
  - Filtro por cor
  - Visualização em grid

- ⭐ Sistema de favoritos:
  - Marcar/desmarcar favoritos
  - Página dedicada para favoritos
  - Sincronização com a conta

- 🔄 Integração com Canva:
  - Edição direta no Canva
  - Templates personalizáveis
  - Download em alta qualidade

- 📤 Compartilhamento:
  - Links de compartilhamento
  - Legendas sugeridas
  - Download direto

### 🛠️ Tecnologias

- Next.js 14
- TypeScript
- MongoDB
- Redis (Upstash)
- TailwindCSS
- NextAuth.js

### 📦 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### 🔑 Variáveis de Ambiente

```env
# MongoDB
MONGODB_URI=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Redis
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Canva
NEXT_PUBLIC_CANVA_API_KEY=
```

### 📚 API Endpoints

#### Templates

- `GET /api/templates` - Lista todos os templates
- `GET /api/templates?category=versiculos` - Lista templates por categoria
- `GET /api/templates/[id]` - Detalhes de um template
- `POST /api/templates/favorite` - Favorita/desfavorita um template
- `GET /api/templates/favorites` - Lista templates favoritos
- `POST /api/templates/share` - Cria link de compartilhamento

### 📊 Analytics

O sistema inclui analytics para rastrear:
- Visualizações de templates
- Downloads
- Compartilhamentos
- Edições no Canva
- Templates favoritos

### 🎯 Próximas Funcionalidades

- [ ] Suporte para múltiplos idiomas
- [ ] Sistema de tags
- [ ] Temas personalizados
- [ ] Busca por texto completo
- [ ] Mais categorias de templates
- [ ] Estatísticas avançadas

### 👥 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 