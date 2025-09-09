import { useState } from "react";
import { useTodoList } from "../store/todostore.ts";

const TodoInput = () => {
  const { addTodo } = useTodoList();
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default TodoInput;