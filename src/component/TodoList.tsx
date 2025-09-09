import { useTodoList } from "../store/todostore";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodoList();

  return (
    <div>
      <h2>Todo List</h2>
      <TodoInput />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
