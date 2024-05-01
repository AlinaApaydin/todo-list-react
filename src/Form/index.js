import { useState } from "react";
import "./style.css";


const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContet] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input 
      value={newTaskContent}
      className="form__newTask" placeholder="Co jest do zrobienia?" 
      onChange={(event) => setNewTaskContet(event.target.value)}
     />
      <button className="form__button">Dodaj zadanie</button>
    </form>
);
};

export default Form;

