import React from 'react';
import { TodoContext } from './todoContext';
import type { TodoContextType } from './TodoContextType';
import type { Props } from './TodoContextType';
import { useTodos } from '../util/useTodo';



const TodoContextProvider: React.FC<Props> = ({ children }: Props) => {  
    
    const { items: todos, addTodo, removeTodo } = useTodos();


    const contextValue: TodoContextType = {
        items: todos,
        addTodo: addTodo,
        removeTodo: removeTodo
    };

    
    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
}
export default TodoContextProvider;