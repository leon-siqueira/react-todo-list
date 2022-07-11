import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.module.scss'
import { CreateTask } from './components/CreateTask'
import { Task } from "./components/Task";
// import global from './global.module.scss'

const MY_TASKS:Task[] = [
  // {
  //   id: 1,
  //   description: 'Levar o lixo para fora',
  //   isDone: true,
  // },
  // {
  //   id: 2,
  //   description: 'Levar o cachorro para passear',
  //   isDone: false,
  // },
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CreateTask taskList={MY_TASKS}/>
      </header>
    </div>
  )
}

export default App
