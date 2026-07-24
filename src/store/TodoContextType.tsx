import Todo from '../model/Todo';

export type Props = {
    children: React.ReactNode
};

export type TodoContextType = {
    items: Todo[],
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};