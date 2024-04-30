import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from './Container';
import "./index.css";


const tasks = [
  { id: 1, content: "przejść na reakta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];



function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }


  return (
    <Container className="main">
    <h1 className="main__title">Lista Zadań</h1>
    
    <Section title="Dodaj nowe zadanie" body={<Form />}/>
   
    <Section title="Lista Zadań"
    
            body={<Tasks tasks={tasks} hideDone={hideDone} />}
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
