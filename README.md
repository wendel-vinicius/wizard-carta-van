<h1 align="center"> Wizard de Carta de VAN</h1>

<p align="center">
  <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen" alt="Status do Projeto">
  <img src="https://img.shields.io/badge/vers%C3%A3o-1.0.0-blue" alt="Versão">
  <img src="https://img.shields.io/badge/licen%C3%A7a-MIT-green" alt="Licença">
  <br>
  <img src="https://img.shields.io/badge/Node.js-24.1.0-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/npm-11.3.0-CB3837?logo=npm&logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/NestJS-11.1-E0234E?logo=nestjs&logoColor=white" alt="NestJS">
  <br>
  <img src="https://img.shields.io/badge/TypeScript-5.7.3-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-4.1.7-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Prisma-6.8.2-2D3748?logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/Redis-5.5.6-DC382D?logo=redis&logoColor=white" alt="Redis">
  <br>
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/PostgreSQL-16.x-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Formik-2.4.6-6A1B9A?logo=formik&logoColor=white" alt="Formik">
  <img src="https://img.shields.io/badge/Axios-1.9.0-5A29E4?logo=axios&logoColor=white" alt="Axios">
</p>

<p align="center">
  <strong>Uma solução prática para gerar cartas de autorização para VANs bancárias, integrando Plugboleto e Zendesk.</strong>
</p>

## 📋 Sobre o Projeto

O Wizard de Carta de VAN foi desenvolvido como parte de um desafio acadêmico com metas e prazos definidos, realizado em colaboração entre a instituição de ensino e uma empresa parceira responsável pela avaliação final do projeto.

Durante o desenvolvimento, os participantes atuaram em um ambiente de simulação profissional, no qual a equipe representava a empresa fictícia de software **Nebula**, criada como parte da dinâmica do projeto.

## 📌 Visão Geral

O **Wizard de Carta de VAN** é uma aplicação desenvolvida para simplificar a emissão de cartas de autorização para VANs bancárias. Através de uma interface intuitiva, o usuário é guiado por etapas que facilitam a geração de cartas de forma eficiente.

### Funcionalidades Implementadas

- **Selecao de Banco**: Busca inteligente por codigo ou nome da instituicao financeira, com sugestoes em tempo real.

- **Selecao de Produtos**: Escolha flexivel de produtos bancarios, incluindo Boletos, Pagamentos, Extrato e DDA (Debito Direto Autorizado).

- **Formulario Dinamico**: Validacao de campos com feedback visual instantaneo, prevenindo erros antes do envio.

- **Geracao de PDF**: Criacao automatica de cartas no formato PDF, seguindo os padroes exigidos (Nexxera e Finnet).

- **Integracao com Zendesk**: Abertura automatica de tickets de atendimento via Zapier, garantindo rastreabilidade.

- **Envio de E-mails**: Distribuicao automatica das cartas geradas para os destinatarios cadastrados.

- **Interface Responsiva**: Design adaptado para desktop, tablet e dispositivos moveis, garantindo usabilidade em qualquer plataforma.

---

### Problema Solucionado

Atualmente, a emissão de boletos bancários enfrenta atrasos significativos devido a erros manuais no preenchimento da Carta de VAN. O processo manual resulta em:

- Preenchimento incorreto de dados
- Informações desatualizadas ou fora do padrão exigido
- Recusa de pedidos pelos bancos
- Retrabalho e aumento no tempo de atendimento
- Sobrecarga do suporte técnico

---

## 🎯 Objetivos

### Objetivo Geral

Desenvolver uma aplicação web capaz de automatizar o preenchimento, validação, geração e envio da Carta de Autorização para Comunicação via VAN, integrando o processo com sistemas de atendimento e comunicação corporativa.

### Objetivos Específicos

- ✅ Interface intuitiva baseada em wizard
- ✅ Seleção dinâmica de bancos e produtos
- ✅ Validação de dados em tempo real
- ✅ Geração automática de PDFs padronizados
- ✅ Integração com Zendesk via Zapier
- ✅ Envio automático de e-mails com documentos
- ✅ Histórico e rastreabilidade das cartas emitidas

---

## 🛠️ Tecnologias Utilizadas

### Core do Projeto

| Tecnologia     | Versão | Finalidade                              |
| -------------- | ------ | --------------------------------------- |
| **Node.js**    | 24.1.0 | Ambiente de execução                    |
| **TypeScript** | 5.7.3  | Tipagem estática (front-end e back-end) |
| **Axios**      | 1.9.0  | Requisições HTTP (front-end e back-end) |

### Front-end

| Tecnologia        | Versão        | Finalidade                               |
| ----------------- | ------------- | ---------------------------------------- |
| **React**         | 19.1.0        | Biblioteca para interface de usuário     |
| **Vite**          | 6.3.5         | Build tool e dev server                  |
| **Tailwind CSS**  | 4.1.7         | Estilização e responsividade             |
| **Formik + Yup**  | 2.4.6 / 1.6.1 | Gerenciamento e validação de formulários |
| **Framer Motion** | 12.11.2       | Animações                                |
| **Swiper**        | 11.2.6        | Carrossel de slides                      |

### Back-end

| Tecnologia       | Versão         | Finalidade                     |
| ---------------- | -------------- | ------------------------------ |
| **NestJS**       | 11.1.3         | Framework Node.js estruturado  |
| **Prisma ORM**   | 6.8.2          | Mapeamento objeto-relacional   |
| **JWT**          | 11.0.0         | Autenticação via tokens        |
| **Nodemailer**   | 7.0.3          | Envio de e-mails               |
| **pdfmake**      | 0.2.20         | Geração de PDF                 |
| **Redis + Bull** | 5.5.6 / 4.16.5 | Cache e gerenciamento de filas |

### Serviços e Plataformas

| Serviço      | Finalidade                           |
| ------------ | ------------------------------------ |
| **Vercel**   | Hospedagem do front-end              |
| **Render**   | Hospedagem da API                    |
| **Supabase** | Banco de dados PostgreSQL gerenciado |
| **Zapier**   | Automação com Zendesk                |
| **GitHub**   | Controle de versão e CI/CD           |

### Banco de Dados

| Tecnologia          | Finalidade                |
| ------------------- | ------------------------- |
| **PostgreSQL 16.x** | Banco de dados relacional |
| **Redis 5.5.6**     | Cache e filas             |

---

## 📡 API Endpoints

| Categoria        | Método   | Endpoint                 | Descrição                  |
| ---------------- | -------- | ------------------------ | -------------------------- |
| **Autenticação** | POST     | `/auth/login`            | Login via CNPJ e token     |
| **Bancos**       | GET      | `/banks`                 | Lista bancos cadastrados   |
| **Produtos**     | GET      | `/products`              | Lista produtos disponíveis |
| **CNAB**         | GET      | `/cnabs`                 | Lista layouts CNAB         |
| **VAN Types**    | GET      | `/van-types`             | Lista tipos de VAN         |
| **Cartas**       | POST/GET | `/authorization-letters` | CRUD de cartas             |
| **PDF**          | POST     | `/pdfs/generate`         | Geração de PDF             |

---

## ✅ Qualidade e Testes

1. Testes de Usabilidade (Manual)

Método: Teste com usuários sem conhecimento técnico
Critérios avaliados: Clareza, eficiência, prevenção de erros, responsividade, experiência geral
Resultado: Aprovado com recomendações para aprimoramento da versão mobile

2. Testes Funcionais (Manual)

Método: Simulação de fluxos completos e cenários de erro
Cenários testados: Login, seleção de banco, formulários, geração de PDF, integração Zapier
Ferramenta: Navegadores (Chrome, Edge, Opera)
Resultado: 100% aprovado

3. Testes de Desempenho (Automatizado)

Método: Análise automatizada de métricas web
Métricas: Desempenho, acessibilidade, boas práticas, SEO
Ferramenta: Google PageSpeed Insights
Resultado: Desktop 99/100 | Mobile 84/100

4. Testes de Carga (Automatizado)

Método: Simulação de múltiplos usuários simultâneos
Cenário: 1000 usuários durante 5 minutos
Métricas: Taxa de sucesso, tempo de resposta, falhas
Ferramenta: Grafana K6
Resultado: 98.4% de sucesso, tempo médio 1.09s

---

## 👥 Membros da equipe

Gabriella Dos Santos Freitas
Geovanna Cardoso Da Silva
Jardy Rover Giovan Melo Bonfim
Kethellin Pereira
Wanderson Gabriel Sampaio Navarro
Wendel Vinicius Dos Santos Reis

**Orientador:** Juliano Olimpio Lima

## 📄 Licença

MIT © 2025 - UNICV Centro Universitário Cidade Verde
