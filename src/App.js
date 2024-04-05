import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from './Container';

const tasks = [
  { id: 1, content: "przejść na reakta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;



function App() {
  return (
    <Container className="main">
    <h1 className="main__title">Lista Zadań</h1>
    
    <Section title="Dodaj nowe zadanie" body={<Form />}/>
   
    <Section title="Lista Zadań"
            body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
            extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>}/>
            
    </Container>
    );
  };


export default App;
