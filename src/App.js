import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';
import { generate as id } from 'shortid';
import TaskInfo from './components/TaskInfo';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

let bgdark = false;
const darkbackground = "rgb(24, 24, 36)";

const Globalstyle = createGlobalStyle`
  body{
  background-color:  ${ darkbackground };
  }
`
const App = () => {
  const[night, setNight] = useState(false);
  const[task, setTask] = useState([{
    title: "limpiar la casa",
    done: false
  }])

  const[oldTask, setOldTask] = useState(task);
  const[active, setActive] = useState(false);
  const[completed, setCompleted] = useState(false);

  const newTask = (e) => {
  e.preventDefault(); 
  if(e.target.title.value.trim() !== ""){
    createNewTask(e.target.title.value);
    e.target.title.value = "";
  }
  }

  const createNewTask = (title) => {
    const newTaskCreated = {
      id: id(),
      title,
      done: false
    }
    const allTask = [...task, newTaskCreated];
    setTask(allTask);
  }

  const clearCompleted = () => {
    const completedTask = oldTask.filter(taskcheck => taskcheck.done === false)
    setTask(completedTask);
    setOldTask(completedTask);
  }

  const handleChecked = (id) => {
    const currentTask = [...task];
    const qTask = currentTask.find(tesk => tesk.id === id);
    const index = currentTask.indexOf(qTask);
    currentTask[index].done =!currentTask[index].done;
    setTask(currentTask);
    setOldTask(task);
  }
  
  const seeCompleted = () => {
    setActive(false);
    setCompleted(true);
    setTask(oldTask);
    let actualCompleted = oldTask.filter(actualComp => actualComp.done === true)
    setTask(actualCompleted);
  }

  const seeActive = () => {
      setCompleted(false);
      setActive(true);
      setTask(oldTask);
      let actualActived = oldTask.filter(actualAct => actualAct.done === false)
      setTask(actualActived);
  }

  const seeAll = () => {
    setActive(false);
    setCompleted(false);
    setTask(oldTask);
  }


  const handleDelete = (id) => {
    let currentTask = task;
    currentTask = currentTask.filter(tesk => tesk.id !== id);
    setTask(currentTask);
  }
  
  const handleNight = () => {
    setNight(!night);
    bgdark = !bgdark;
  }
  
  return (
    <div className="App">
      {
        (bgdark) && <Globalstyle />
      }
      <Header
        active={active}
        completed={completed}
        newTask={newTask}
        handleNight={handleNight}
        night={night}
      />
      {
        task.map(tas => (
          <Task
          key={id()}
          handleDelete={() => handleDelete(tas.id)}
          night={night}
          title={tas.title}
          done={tas.done}
          handleChecked={() => handleChecked(tas.id)}
          />
        ))
      }
      <TaskInfo
        clearCompleted={clearCompleted}
        task={task}
        night={night}
      />
      <Footer
        seeActive={seeActive}
        seeAll={seeAll}
        seeCompleted={seeCompleted}
        night={night}
      />

    </div>
  );
}

export default App;
