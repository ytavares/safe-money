This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Executando o projeto

Siga as instruções das próximas seções para executar o projeto localmente.

### Instale as depêndencias do projeto

```bash
npm install
```

### Execute o servidor de desenvolvimento

```bash
# Execute o servidor de desenvolvimento
npm run dev
```

### Execute o ambiente de produção

```bash
# Gere uma build de produção
npm run build
```

### Execute o ambiente de desenvolvimento do storybook

```bash
# Execute o ambiente de desenvolvimento do storybook
yarn storybook
```

### Execute o ambiente de produção do storybook

```bash
# Execute o ambiente de produção do storybook
yarn build-storybook
```

## Estrutura de pastas

Listagem dos principais arquivos e pastas do projeto.

```
📦
 ┣ 📂 app               -> integrações externas
 ┣ 📂 common            -> conteúdos utilitários
 ┣ 📂 features          -> funcionalidades do projeto
 ┣ 📂 pages             -> páginas/roteamento da aplicação
 ┣ 📂 public            -> arquivos acessiveis publicamente
 ┣ 📂 stories           -> documentação de páginas e componentes externos para o storybook
 ┣ 📜 .editorconfig     -> regras para formatação de texto
 ┣ 📜 eslintrc.json     -> configurações da ferramenta de lint
 ┣ 📜 .gitignore        -> arquivos não rastreados pelo git
 ┣ 📜 jest.config.js    -> configurações do jest
 ┣ 📜 tsconfig.json     -> configurações do typescript
```
