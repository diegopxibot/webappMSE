# Documentação da API

## Autenticação

Todas as rotas da API requerem autenticação via NextAuth. O token de acesso deve ser enviado no header `Authorization`:

```
Authorization: Bearer ${token}
```

## Endpoints

### Templates

#### Listar Templates

```http
GET /api/templates
```

**Query Parameters:**
- `category` (opcional): Filtrar por categoria
- `style` (opcional): Filtrar por estilo
- `color` (opcional): Filtrar por cor
- `search` (opcional): Buscar por texto

**Resposta:**
```json
{
  "templates": [
    {
      "id": "string",
      "name": "string",
      "category": "string",
      "imageUrl": "string",
      "canvaUrl": "string",
      "downloadUrl": "string",
      "suggestedCaption": "string",
      "previewUrl": "string",
      "color": "string",
      "style": "string",
      "variations": [
        {
          "id": "string",
          "name": "string",
          "imageUrl": "string",
          "style": "string"
        }
      ]
    }
  ]
}
```

#### Detalhes do Template

```http
GET /api/templates/{id}
```

**Resposta:**
```json
{
  "id": "string",
  "name": "string",
  "category": "string",
  "imageUrl": "string",
  "canvaUrl": "string",
  "downloadUrl": "string",
  "suggestedCaption": "string",
  "previewUrl": "string",
  "color": "string",
  "style": "string",
  "variations": [
    {
      "id": "string",
      "name": "string",
      "imageUrl": "string",
      "style": "string"
    }
  ]
}
```

### Favoritos

#### Listar Favoritos

```http
GET /api/templates/favorites
```

**Resposta:**
```json
{
  "favorites": [
    {
      "id": "string",
      "name": "string",
      "category": "string",
      "imageUrl": "string",
      "canvaUrl": "string",
      "downloadUrl": "string",
      "suggestedCaption": "string",
      "previewUrl": "string",
      "color": "string",
      "style": "string"
    }
  ]
}
```

#### Favoritar/Desfavoritar Template

```http
POST /api/templates/favorites
```

**Body:**
```json
{
  "templateId": "string",
  "action": "add" | "remove"
}
```

**Resposta:**
```json
{
  "success": true
}
```

### Compartilhamento

#### Criar Link de Compartilhamento

```http
POST /api/templates/share
```

**Body:**
```json
{
  "templateId": "string"
}
```

**Resposta:**
```json
{
  "shareUrl": "string"
}
```

#### Acessar Template Compartilhado

```http
GET /api/templates/share?id={shareId}
```

**Resposta:**
```json
{
  "id": "string",
  "name": "string",
  "category": "string",
  "imageUrl": "string",
  "canvaUrl": "string",
  "downloadUrl": "string",
  "suggestedCaption": "string",
  "previewUrl": "string",
  "color": "string",
  "style": "string"
}
```

### Analytics

#### Registrar Visualização

```http
POST /api/analytics/view
```

**Body:**
```json
{
  "templateId": "string"
}
```

#### Registrar Ação

```http
POST /api/analytics/action
```

**Body:**
```json
{
  "templateId": "string",
  "action": "download" | "share" | "canva" | "favorite"
}
```

#### Obter Estatísticas do Template

```http
GET /api/analytics/template/{templateId}
```

**Resposta:**
```json
{
  "views": number,
  "downloads": number,
  "shares": number,
  "canvaEdits": number,
  "favorites": number
}
```

## Códigos de Erro

- `400`: Requisição inválida
- `401`: Não autorizado
- `403`: Acesso negado
- `404`: Recurso não encontrado
- `429`: Muitas requisições
- `500`: Erro interno do servidor

## Rate Limiting

As requisições são limitadas a 100 por minuto por IP. Após exceder o limite, você receberá um erro 429.

## Cache

Os resultados são cacheados por 24 horas. Para forçar uma atualização, adicione o parâmetro `fresh=true` à URL. 