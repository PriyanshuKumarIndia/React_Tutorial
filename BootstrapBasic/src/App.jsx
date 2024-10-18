import Header from "./components/header";
import InputField from "./components/InputField";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      todoName: "Goto college",
      todoDate: "12/07/2024",
    },
    {
      todoName: "Buy Milk",
      todoDate: "12/07/2024",
    },
    {
      todoName: "Study",
      todoDate: "12/07/2024",
    },
  ];
  return (
    <center className="todo-container">
      <Header></Header>
      <InputField></InputField>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
