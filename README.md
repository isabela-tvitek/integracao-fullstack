# Integração Full-stack — Next.js + NestJS (CORS)

Projeto exemplo para demonstrar **Integração Full-stack** entre **Next.js** e **NestJS**, incluindo erro e resolução de **CORS**.

---

# Objetivo

Demonstrar:

* Integração Frontend e Backend
* Erro de CORS
* Como resolver CORS
* Comunicação entre APIs

---

# Estrutura do Projeto

```
integracao-fullstack/
 ├── back   # Backend NestJS
 ├── front  # Frontend Next.js
 └── docker-compose.yml
```
---

# Como rodar com Docker

Subir projeto:

```
docker compose up --build
```

Rodar em background:

```
docker compose up -d
```

Parar containers:

```
docker compose down
```

---

# Acessos

Frontend:

```
http://localhost:3001
```

Backend:

```
http://localhost:3000
```

---

# Teste de Integração

Rota Frontend:

```
/users
```

Essa rota consome dados da API NestJS:

```
http://localhost:3000/users
```

---

# CORS

Inicialmente ocorrerá erro de CORS:

```
Access to fetch blocked by CORS policy
```

Solução no `main.ts` do NestJS:

```ts
app.enableCors({
  origin: 'http://localhost:3001',
  credentials: true,
});
```

---

# Instalação Manual (Sem Docker)

Backend:

```
cd back
npm install
npm run start:dev
```

Frontend:

```
cd front
npm install
npm run dev
```
---

# Autora

Isabela Taques Vitek
