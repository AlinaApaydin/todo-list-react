import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
<div className="buttons">
{tasks.length > 0 && (
        <>
        <button onClick={toggleHideDone} className="buttons_button ">
            {hideDone ? "Pokaż" : "Ukryj"} ukończone 
        </button>
        <button onClick={setAllDone} className="buttons_button"disabled={tasks.every(({done}) => done)}> Ukończ wszystkie</button>
        </>
    )}
</div>
)
    
   

export default Buttons;