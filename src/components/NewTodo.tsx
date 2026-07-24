import  React from "react";
import { TodoContext } from "../store/todoContext";
import classes from './NewTodo.module.css';


const NewTodo: React.FC = () => {

 const todoInputTextRef = React.useRef<HTMLInputElement>(null);
 const todos = React.useContext(TodoContext);


    const sunmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredText = todoInputTextRef.current?.value;

        if (!enteredText || enteredText.trim().length === 0) {
            return;
        }
        todos.addTodo(enteredText);
    }
  return (  
    <form className={classes.form} onSubmit={sunmitHandler}>
     <label htmlFor="todo">New Todo:</label>
      <input type="text" id="todo" ref={todoInputTextRef} placeholder="Enter a new todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodo;