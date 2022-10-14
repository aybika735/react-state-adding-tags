import { useState } from "react";
function App() {
  const [isempty, setIsempty] = useState(false);
  const [text, setText] = useState("");
  const [texterror, setTexterror] = useState(
    "Поле ввода не должно быть пустым"
  );
  const [todos, setTodos] = useState([
    {
      text: "JavaScript",
    },
    {
      text: "TypeScript",
    },
    {
      text: "PHP",
    },
  ]);
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value === "") {
      setTexterror("Поле ввода не должно быть пустым");
      setIsempty(true);
    }
    setTexterror("");
    e.target.nextSibling.className="btn";
    e.target.className = "input";
    setIsempty(false);
  };
  const handleBlur = (e) => {
    if (e.target.name === "text" && e.target.value === "") {
      setTexterror("Поле ввода не должно быть пустым");
      setIsempty(true);
      e.target.className = "input-shadow";
    }
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(text);
    setTodos([
      ...todos,
      {
        text: text,
      },
    ]);
    setText("");
    if (e.target.value === "") {
      setTexterror("Поле ввода не должно быть пустым");
      setIsempty(true);
    }
  };
const deletetodo =(indextodo)=>{
 let filtered = todos.filter((todo, index)=>{
  if(indextodo===index){
    return false;
  }
  return true;
 })
 setTodos(filtered);
}

  return (
    <div className="App">
      <form onSubmit={handleSumbit}>
        <input
          className={isempty ? "input-shadow" : "input"}
          value={text}
          name="text"
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleChange(e)}
        />
        <button  disabled={isempty} className={isempty ? "disabled" : "btn"}>Отправить</button>
        {isempty && <div className="is-error">{texterror}</div>}
      </form>
      <div className="container">
        {todos.map((todo, index) => {
          return <div className="text-value"><div >{todo.text}</div><button onClick={()=>deletetodo(index)}>x</button></div>;
        })}
      </div>
    </div>
  );
}

export default App;
