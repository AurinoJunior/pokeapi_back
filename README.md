<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png">
  <h3>Poke api</h3>
</div>

<p align="center">
   <a href="https://www.instagram.com/aurigod97/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-aurigod97-0390fc?style=flat&logo=Instagram&logoColor=white&color=blue" />
   </a>
    <a href="https://www.linkedin.com/in/aurino-junior-7718a4158/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-Aurino%20Junior-0390fc?style=flat&logo=Linkedin&logoColor=white&color=blue" />
   </a>
</p>

📍 **Conteúdo**

- [Contexto](#blue_book-contexto)
- [Tecnologias](#computer-tecnologias)
- [Iniciando o projeto](#video_game-iniciando-o-projeto)
- [Como usar](#beers-como-usar)
- [Licença](#page_with_curl-licença)

## :blue_book: Contexto

Esse projeto consite em um middleware, que usa as informações da poke api para alimentar uma aplicação frontend.

## :computer: Tecnologias

- node
- fastify
- typescript
- docker
- vitest
- eslint
- zod
- tsup

## :video_game: Iniciando o projeto

Rodando com docker

1. Clone a .env.example para um arquivo `cp .env.example .env`
2. Subo o serviço com `docker-compose up`
3. A aplicação ficará disponivel em `http://localhost:3333`

Rodando com api local

1. Clone a .env.example para um arquivo `cp .env.example .env`
2. Instale as dependencias `yarn install`
3. Suba a aplicação com `yarn dev`
4. A aplicação ficará disponivel em `http://localhost:3333`

## :beers: Como usar

A rota de healthcheck é

```bash
curl --request GET \
  --url http://localhost:3333/healthcheck
```

Após subir o projeto use esse curl para fazer um teste simples:

```bash
curl --request GET \
  --url http://localhost:3333/pokemon/pikachu/abilities
```

## :page_with_curl: Licença

MIT
