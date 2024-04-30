import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from './Container';
import "./index.css";



function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na reakta", done: false },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };


  return (
    <Container className="main">
    <h1 className="main__title">Lista Zadań</h1>
    
    <Section title="Dodaj nowe zadanie" body={<Form />}/>
   
    <Section title="Lista Zadań"
    
            body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
            extraHeaderContent={
            <Buttons 
            tasks={tasks} 
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            />
          }
            />
                  
    </Container>
    );
  };


export default App;
