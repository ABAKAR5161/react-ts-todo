import React from 'react';
import Todo from '../model/Todo';

export const useTodos = (): {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
} => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo = new Todo(text);
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    return {
        items: todos,
        addTodo: addTodo,
        removeTodo: removeTodo
    };
}