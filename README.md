<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg" width="120" alt="Angola Flag" />
</p>

<h1 align="center">API Angolan Universities</h1>

<p align="center">Uma API para consulta de informações sobre universidades de Angola.</p>

---

## Descrição

A <strong>API Angolan Universities</strong> fornece endpoints para acessar dados de universidades angolanas, facilitando a integração e consulta de informações acadêmicas para aplicações, sites e sistemas educacionais.

## Instalação

```bash
$ pnpm install
```

## Como usar

```bash
# desenvolvimento
$ pnpm run start

# modo watch
$ pnpm run start:dev

# produção
$ pnpm run start:prod
```

A API estará disponível em `http://localhost:3000` por padrão.

## Testes

```bash
# testes unitários
$ pnpm run test

# testes e2e
$ pnpm run test:e2e

# cobertura de testes
$ pnpm run test:cov
```

## Endpoints principais

- `GET /universities` — Lista todas as universidades
- `GET /universities/:id` — Detalhes de uma universidade específica

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

MIT

---

<p align="center">Feito com ❤️ para a educação angolana.</p>
