# Wanted Outlaws - Sistema de Gerenciamento de Procurados

## Sobre o Projeto

Wanted Outlaws é um sistema web completo para gerenciar informações sobre indivíduos procurados, inspirado no Velho Oeste. A aplicação oferece funcionalidades para cadastrar, listar, buscar e atualizar dados de criminosos, com um design temático e uma interface moderna. O sistema inclui uma listagem com scroll infinito, ações em massa com modal de pré-visualização, e ações individuais por item.

## ️ Tecnologias Utilizadas

### Backend (NestJS + PostgreSQL)

- **NestJS:** Framework escalável baseado em Node.js para a construção da API.
- **TypeORM:** ORM para facilitar a interação com o banco de dados PostgreSQL.
- **PostgreSQL:** Banco de dados relacional para armazenar as informações dos procurados.
- **Docker:** Para conteinerização do backend e banco de dados, facilitando a implantação e o desenvolvimento.

### Frontend (React + Material UI)

- **React.js:** Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e reativas.
- **Material UI:** Framework de componentes React para estilização e criação de uma interface de usuário consistente e responsiva.
- **React Hook Form:** Biblioteca para gerenciamento de formulários no React, simplificando a validação e o envio de dados.
- **Scroll Infinito:** Implementação de carregamento contínuo de dados na listagem de procurados, melhorando a experiência do usuário.
- **Ações em Massa:** Funcionalidade para selecionar múltiplos itens e aplicar uma ação a todos simultaneamente.
- **Modal de Pré-visualização:** Exibição dos itens selecionados em uma modal antes da aplicação da ação em massa.
- **Ações Individuais:** Capacidade de realizar ações específicas em cada item da lista, como editar o nome diretamente na listagem.

### Orquestração (Docker Compose)

- **Docker:** Para criar um ambiente de desenvolvimento isolado e consistente.
- **Docker Compose:** Para gerenciar e orquestrar os containers do backend, frontend e banco de dados.

## Estrutura do Projeto

```
/wanted-outlaws
├── backend/                 # Código do backend em NestJS
│   ├── src/
│   │   ├── database/        # Configuração do banco de dados (TypeORM)
│   │   ├── entities/         # Módulos da aplicação (procurados, etc.)
│   │   ├── main.ts          # Ponto de entrada da API
│   ├── package.json         # Dependências do backend
│   ├── Dockerfile           # Dockerfile para o backend
│   └── .env                 # Variáveis de ambiente do backend
│
├── frontend/                # Código do frontend em React
│   ├── src/
│   │   ├── components/      # Componentes da aplicação (listagem, modal, etc.)
│   │   ├── pages/           # Páginas do sistema (listagem de procurados)
│   │   ├── theme.ts         # Tema personalizado do Material UI
│   ├── package.json         # Dependências do frontend
│   ├── Dockerfile           # Dockerfile para o frontend
│
├── docker-compose.yml       # Configuração dos containers Docker
└── README.md                # Documentação do projeto
```

## Funcionalidades Principais

- ✅ **Cadastro e edição de procurados:** Permite adicionar e modificar informações dos procurados.
- ✅ **Listagem paginada com scroll infinito:** Exibe os procurados em uma lista com carregamento contínuo.
- ✅ **Ações em massa com modal de pré-visualização:** Seleção de múltiplos itens e aplicação de ações em lote, com confirmação em modal.
- ✅ **Ações individuais por item:** Edição de informações específicas de cada procurado diretamente na lista.
- ✅ **Filtros de busca:** Permite filtrar a listagem por diferentes critérios (nome, status, etc.).
- ✅ **Aplicação de temas e estilização inspirada no Velho Oeste:** Design temático para uma experiência imersiva.
- ✅ **Integração com PostgreSQL via TypeORM:** Facilita a interação com o banco de dados.
- ✅ **Deployment facilitado com Docker:** Conteinerização para implantação simplificada.

## Licença

Este projeto está sob a licença MIT.
