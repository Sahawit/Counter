import { useTodoList } from "../store/todostore";

type Props = {
  id: number;
  text: string;
};

const TodoItem = ({ id, text }: Props) => {
  const { removeTodo } = useTodoList();

  return (
    <li>
      {text}
      <button onClick={() => removeTodo(id)}>Remove</button>
    </li>
  );
};

export default TodoItem;