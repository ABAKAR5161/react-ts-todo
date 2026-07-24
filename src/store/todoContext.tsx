
import {createContext} from 'react';
import Todo from '../model/Todo';
import type {TodoContextType} from './TodoContextType';



export const TodoContext = createContext<TodoContextType>({
    items: [] as Todo[],
    addTodo: () => {},
    removeTodo: () => {}
});


