# LandPage React
## Descrição do projeto
LandPage criado com react e typescript inspirado na página de [Inbound Emotion](https://www.inboundemotion.com/es/diccionario-inbound-marketing)

<p>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EuCarlos/landpage-react?style=flat-square">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EuCarlos/landpage-react?color=orange&style=flat-square">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/EuCarlos/landpage-react?color=yellow&style=flat-square">
    <img alt="GitHub" src="https://img.shields.io/github/license/EuCarlos/landpage-react?style=flat-square">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/eucarlos/landpage-react?style=flat-square">
</p>

___
### Instalação

Clone o repositório:

    git clone https://github.com/EuCarlos/landpage-react.git && cd landpage-react

Instale as dependências usando o Yarn:

    yarn install // ou -> npm install 

### Variaveis de Ambiente
criar um arquivo `.env` igual ao arquivo `.env.example` e preencha com suas credenciais do github

### Rode o projeto
Iniciar o projeto react:

    yarn dev // ou -> npm run dev

___
## O Projeto

### Objetivo geral: 
Desenvolver uma landing page funcional e integrar teoria e prática dos conhecimentos adquiridos à realidade.

### Requisitos funcionais
* [**RF001**] - O sistema deve possuir um formulário que receba os seguintes campos: Nome, Email, Empresa e Site.
* [**RF002**] - O sistema deverá mostrar uma mensagem após o envio do formulário.
* [**RF003**] - O sistema deverá enviar um e-mail para notificação sobre o conteúdo esperado.
* [**RF004**] - O sistema deve contar o número de pessoas que preencheram o formulário.
* [**RF005**] - O sistema deve mostrar (em algum lugar na página de destino) comentários sobre o conteúdo relacionado.

### Requisitos não funcionais
* [**RNF001**] - O Sistema deve ser responsivo (adaptável para desktop, tablets e celulares).
* [**RNF002**] - O sistema deve ser desenvolvido utilizando React e TypeScript.
* [**RNF003**] - O sistema deve estar conectado a uma API de envio de mensagens (criada por mim).
* [**RNF004**] - O sistema deve ter uma boa interface para interação homem-máquina.
* [**RNF005**] - O sistema deve receber variáveis dos ambientes.


### Protótipo do projeto
<img src="https://raw.githubusercontent.com/EuCarlos/landpage-react/main/src/images/capa_do_projeto.PNG" alt="image" width="100%" /> 

O projeto é uma landing page onde é apresentado um texto (em português) com informações gerais sobre o e-book, com um formulário no lado direito da tela. Na tela do site, também são mostrados comentários de pessoas que receberam seu e-book por e-mail e relatam a experiência. Na parte inferior da página há botões para acessar Github, LinkedIn, Dribbble, Instagram e o site pessoal do autor da página.

## Estrutura de diretórios
```
.
├── src
│    ├── components
│    │    ├── LandingForm
│    │    │      ├── index.tsx
│    │    │      └── styles.module.sass
│    │    ├── MessageList
│    │    │      ├── index.tsx
│    │    │      └── styles.module.sass
│    │    └── Menu
│    │           ├── index.tsx
│    │           └── styles.module.sass
│    ├── images
│    │    ├── image.svg
│    │    └── logo.svg
│    ├── database
│    │    └── messageList.example.json
│    ├── pages
│    │    └── Home
│    │          ├── index.tsx
│    │          └── styles.module.sass
│    ├── services
│    │    └── api.ts
│    ├── App.tsx
│    ├── main.tsx
│    ├── styles.module.sass
│    └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
└── yarn.lock
```

____
<p align="center">
Criado com 💜 por <a href="https://github.com/eucarlos/">Carlos Alves</a>
</p>