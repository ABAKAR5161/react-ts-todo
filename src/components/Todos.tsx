import React from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../store/todoContext';
import classes from './Todos.module.css';


const Todos: React.FC = () => {
    const todos = React.useContext(TodoContext);
    return (  
        <ul className={classes.todos}>
        {todos.items.map((todo) => (
            <TodoItem key={todo.id} text={todo.text} onRemoveTodo={() => todos.removeTodo(todo.id)} />
        ))}
        </ul>
      );
}
export default Todos;