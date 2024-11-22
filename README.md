# Lista de Contatos - Backend

Este é o backend para a aplicação de lista de contatos telefônicos. Ele foi desenvolvido com Node.js e utiliza Prisma para gerenciar um banco de dados SQLite. O backend oferece suporte às operações do CRUD (Create, Read, Update, Delete).

## Tecnologias Utilizadas
- Node.js
- Prisma
- SQLite

## Requisitos
- Node.js (v16 ou superior)
- npm

## Como executar o backend

### 1. Instale as dependências
```bash
npm install
```

### 2. Configure o banco de dados
Certifique-se de que o arquivo `.env` possui a URL de conexão para o SQLite:
```env
DATABASE_URL="file:./dev.db"
```

### 4. Aplique as migrações ao banco
```bash
npx prisma migrate dev
```

### 5. Inicie o servidor
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000` por padrão.

## Scripts Disponíveis
- **`npm run dev`**: Inicia o servidor.
- **`npx prisma migrate dev`**: Aplica as migrações ao banco de dados.
- **`npx prisma studio`**: Abre uma interface visual para explorar os dados.

## Estrutura básica do Projeto
```
backend/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
├── src/
│   ├── lib/
│   ├── routes/
│   ├── server.ts
├── package.json
├── .env
```