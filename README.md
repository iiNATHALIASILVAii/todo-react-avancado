# Todo React Avançado

Projeto desenvolvido como atividade acadêmica com o objetivo de criar uma aplicação de lista de tarefas utilizando recursos avançados do React.

## Funcionalidades

- Adicionar nova tarefa
- Marcar tarefa como concluída
- Remover tarefa
- Filtrar tarefas por:
  - Todas
  - Concluídas
  - Pendentes
- Persistência de dados no LocalStorage
- Exibição de estatísticas da lista

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- Context API
- Hooks
- Hooks customizados
- Memoization com `useMemo` e `React.memo`
- LocalStorage

## Recursos aplicados

### Hooks

O projeto utiliza `useState` para controlar estados internos e `useEffect` para salvar os dados no LocalStorage.

### Context API

Foi criado um contexto global para gerenciar as tarefas e compartilhar funções entre os componentes.

### Hooks Customizados

Foram criados dois hooks customizados:

- `useLocalStorage`: responsável por salvar e recuperar dados do LocalStorage.
- `useInput`: responsável por controlar campos de formulário.

### Memoization

O projeto utiliza:

- `useMemo` para evitar recálculos desnecessários da lista filtrada e das estatísticas.
- `React.memo` para evitar renderizações desnecessárias em componentes como lista, filtros e item de tarefa.

## Como rodar o projeto localmente

Clone o repositório:

```bash
git clone https://github.com/iiNATHALIASILVAii/todo-react-avancado.git
```
