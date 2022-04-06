# LandPage React
_Para a versão em português deste README, [clique aqui](/locales/pt_BR/README.md)._
## Project description
LandPage created with react and typescript inspired by the landpage of [Inbound Emotion](https://www.inboundemotion.com/es/diccionario-inbound-marketing)

<p>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EuCarlos/landpage-react?style=flat-square">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EuCarlos/landpage-react?color=orange&style=flat-square">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/EuCarlos/landpage-react?color=yellow&style=flat-square">
    <img alt="GitHub" src="https://img.shields.io/github/license/EuCarlos/landpage-react?style=flat-square">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/eucarlos/landpage-react?style=flat-square">
</p>

___
### Installation

Clone the repo:

    git clone https://github.com/EuCarlos/landpage-react.git && cd landpage-react

Install the dependencies using Yarn:

    yarn install // or -> npm install 
### Environment variables
create an `.env` file like the `.env.example` and fill in your github credentials

### Run the project
Start a react server:

    yarn dev // or -> npm run dev

___
## The project

### General Objective: 
Develop a functional landpage and integrate theory and practice of acquired knowledge to reality.

### Functional requirements
* [**FR001**] - The system must have a form that receives the following fields: Name, Email, Company and Website.
* [**FR002**] - The system should show a message after submitting the form.
* [**FR003**] - The system should send an email for notification about the expected content.
* [**FR004**] - The system must count the number of people who filled out the form.
* [**FR005**] - The system should show (somewhere on the landpage) comments on related content.

### Non-functional requirements
* [**NFR001**] - The System must be responsive (adaptable for desktop, tablets and mobile phones).
* [**NFR002**] - The system should be developed using React and TypeScript.
* [**NFR003**] - The system must be connected to a message sending API (created by me).
* [**NFR004**] - The system should have a good interface for man and machine interaction.
* [**NFR005**] - The system should receive variables from environments.


### Project prototype
<img src="https://raw.githubusercontent.com/EuCarlos/landpage-react/main/src/images/capa_do_projeto.PNG" alt="image" width="100%" /> 

The project is a landpage where a text (in Portuguese) with general information about the e-book is presented, with a form on the right side of the screen. On the website screen, comments from people who received your e-book by e-mail are also shown and report on the experience. At the bottom of the page there are buttons to access Github, LinkedIn, Dribbble, Instagram and the personal website of the landpage author.

## Directory structure
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
Created with heart 💜 by <a href="https://github.com/eucarlos/">Carlos Alves</a>
</p>