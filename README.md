# Todo React Avançado com Recoil

Projeto desenvolvido em **React** como atividade acadêmica com foco em gerenciamento de estado global utilizando **Recoil**.

A aplicação foi criada originalmente utilizando **Context API, hooks customizados e memoization** e posteriormente **refatorada para utilizar Recoil**, preservando as principais funcionalidades e a estrutura visual já existente.

## 🎯 Objetivo

O objetivo desta refatoração foi substituir o gerenciamento de estado global baseado em **Context API** por recursos do Recoil.

A interface e as funcionalidades principais da aplicação foram mantidas

## ✨ Funcionalidades

* Adicionar novas tarefas
* Marcar e desmarcar tarefas como concluídas
* Remover tarefas
* Filtrar tarefas por:
  * Todas
  * Concluídas
  * Pendentes
* Exibir quantidade total de tarefas
* Exibir quantidade de tarefas concluídas
* Exibir quantidade de tarefas pendentes

## ⚛️ Gerenciamento de estado com Recoil

### RecoilRoot

A aplicação é envolvida pelo `RecoilRoot`, disponibilizando o estado global pra todos os componentes.

```jsx
<RecoilRoot>
  <App />
</RecoilRoot>
```

### Átomos

Foram criados dois átomos principais:

* `todoListState`: armazena globalmente a lista de tarefas.
* `todoFilterState`: armazena o filtro atualmente selecionado.

Os filtros disponíveis são:

```text
all
completed
pending
```

### Seletores

O projeto utiliza seletores para trabalhar com informações derivadas dos estados globais.

#### `filteredTodoListState`

Responsável por retornar apenas as tarefas correspondentes ao filtro atualmente selecionado.

#### `todoStatsState`

Responsável por calcular:

* Total de tarefas
* Tarefas concluídas
* Tarefas pendentes

Dessa forma, a lógica de filtragem e cálculo permanece separada dos componentes responsáveis pela interface

### Componentes principais

* `TodoForm`: controla a criação de novas tarefas.
* `TodoList`: exibe a lista obtida através do selector de filtragem.
* `TodoItem`: permite concluir ou remover uma tarefa.
* `TodoFilters`: controla os filtros e apresenta as estatísticas da lista.

## 🔄 Refatoração do projeto

A primeira versão da aplicação utilizava **Context API** como meccanismo de gerenciamento de estado global

Nessa estrutura, o `TodoContext` tinha responsabilidades como:

* armazenamento das tarefas;
* inclusão e remoção de tarefas;
* alteração do status de conclusão;
* filtragem;
* cálculo das estatísticas.

Durante a refatoração, essas responsabilidades foram distribuídas entre **átomos e seletores do Recoil**.

### Antes

```text
Context API
    │
    └── TodoContext
          ├── tarefas
          ├── filtro
          ├── adicionar
          ├── remover
          ├── concluir
          └── estatísticas
```

### Depois

```text
RecoilRoot
    │
    ├── todoListState
    │       │
    │       └── todoStatsState
    │
    ├── todoFilterState
    │
    └── filteredTodoListState
```

Essa mudança permitiu aplicar uma abordagem diferente de gerenciamento de estado global sem reconstruir toda a aplicação, mantendo os componentes e a experiência principal já existentes.

## 🪝 Hook customizado

O projeto mantém o hook `useInput`, criado para controlar o campo de entrada da nova tarefa.

Ele é responsável por:

* armazenar o valor digitado;
* atualizar o valor do input;
* limpar o campo após a inclusão de uma tarefa.

## 🚀 Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/iiNATHALIASILVAii/todo-react-avancado.git
```

Acesse a pasta:

```bash
cd todo-react-avancado
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

Depois, abra no navegador o endereço informado pelo Vite no terminal.

## 📚 Conceitos aplicados

Durante o desenvolvimento e a refatoração foram aplicados conceitos de:

* Componentização
* Estado global
* Recoil
* Átomos
* Seletores
* Props
* Hooks
* Hooks customizados
* Estado derivado
* Separação de responsabilidades
* Refatoração de código
* `React.memo`
