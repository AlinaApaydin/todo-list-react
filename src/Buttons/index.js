import React from 'react';
import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => {
    if (tasks.length === 0) {
        return null;
    };


    return (
        <div className="task__newButtons">
        <button className="task__hideOrShowAllDone ">
            {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button className="task__markAllDone"
            disabled={tasks.every(({done}) => done)}
             >
            Ukończ wszystkie
            </button>
            </div>
    );
};
    



    
    <div classNameName="buttons"></div>


export default Buttons;