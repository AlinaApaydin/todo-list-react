import "./style.css";

const Tasks = (props) => (

 <ul className="task__list">
    {props.tasks.map(task=> (
        <li
        className={`task__list {task.done && props.hideDoneTasks ? " task__list--hidden" : ""}`}
        >
            <span className="task__ToDoList">
                <button className="task__done">{task.done ? "✔" : ""}</button>
                <span className={`task__content  {task.done ? "task__content--done" : ""}`}>
                {task.content}
                </span>
                <button className="task__remove">🗑</button>
            </span>
        </li>
    ))};
 </ul> 
);

export default Tasks;
