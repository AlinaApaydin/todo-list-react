import "./style.css";

const Form = () => (
    <form className="form">
      <input className="form__newTask" placeholder="Co jest do zrobienia?" name="To do" type="text"autocomplete="off" />
      <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;

