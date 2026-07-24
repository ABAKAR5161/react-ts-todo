import Todos from "./components/Todos"
import NewTodo from "./components/NewTodo"
import TodoContextProvider from "./store/TodoContextProvider"

function App() {
  return (
   <TodoContextProvider>
      <h1>Welcome to My App Todo</h1>
      <NewTodo />
      <Todos />
   </TodoContextProvider>
  )
}
export default App
