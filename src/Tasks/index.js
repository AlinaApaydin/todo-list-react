import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
 <ul className="task__list">
    {tasks.map(task=> (
        <li
        className={`task__list {task.done && props.hideDone ? " task__list--hidden" : ""}`}
        >
            <span className="task__ToDoList">
                <button className="task__done">{task.done ? "✔" : ""}</button>
                <span className={`task__content  {task.done ? "task__content--done" : ""}`}>
                {task.content}
                </span>
                <button 
                className="task__remove"
                onClick={() => removeTask(task.id)}>
                    🗑
                </button>
            </span>
        </li>
    ))}
 </ul> 
);

export default Tasks;
