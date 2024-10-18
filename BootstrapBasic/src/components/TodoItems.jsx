import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div className="items-container flex flex-wrap space-justify-content-evenly">
      {todoItems.map((item) => (
        <TodoItem
          key={item.todoName}
          tododate={item.todoDate}
          todoName={item.todoName}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
