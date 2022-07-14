import { createContext, FormEvent, useContext, useState } from 'react'
import logo from './assets/logo.svg'
import styles from './App.module.scss'
import { CreateTask } from './components/CreateTask'
import { Task } from "./components/Task";
import './global.scss'
import { TaskList } from './components/TaskList';

const MY_TASKS:Task[] = [
  {
    id: 1,
    description: 'Levar o lixo para fora',
    isDone: true,
  },
  {
    id: 2,
    description: 'Levar o cachorro para passear',
    isDone: false,
  },
]

interface TasksContextInterface {
  tasks: Task[],
  submit(value:string):void
}

const initialValue:TasksContextInterface = {
  tasks: [],
  submit: (value: string) => {}
}


export const TasksContext = createContext(initialValue);

function App() {

  const [tasks, setTasks] = useState(MY_TASKS)
  tasks === undefined && setTasks([])

  const [taskDesc,setTaskDesc] = useState('')
  const [nextId,setNextId] = useState(tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1)

  function handleCreateTask(tasKDesc:string) {
    const newTask:Task = {
      id: nextId,
      description: tasKDesc,
      isDone: false,
    }

    const newTaskList = [...tasks, newTask]

    setTasks(newTaskList)
    setTaskDesc('')
    setNextId(nextId + 1)
    console.log(newTask)
  }

  return (
    <div className="App">
      <TasksContext.Provider value={{tasks, submit: handleCreateTask}}>
        <CreateTask/>
        <TaskList/>
      </TasksContext.Provider>
    </div>
  )
}

export default App
