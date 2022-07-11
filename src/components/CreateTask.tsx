import { Plus } from "phosphor-react";
import { useState } from "react"
import { Task } from "./Task";
import styles from "./CreateTask.module.scss"

interface Props {
  taskList: Task[]
}

export function CreateTask({taskList}:Props) {

  const [tasks, setTasks] = useState(taskList)
  tasks === undefined && setTasks([])

  const [newTaskText,setNewTaskText] = useState('')
  const [nextId,setNextId] = useState(tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1)

  function handleCreateTask() {
    event?.preventDefault();

    const newTask:Task = {
      id: nextId,
      description: newTaskText,
      isDone: false,
    }

    const newTaskList = [...tasks, newTask]

    setTasks(newTaskList)
    setNewTaskText('')
    setNextId(nextId + 1)
    console.log(tasks)
  }

  function handleTaskText() {
    setNewTaskText(event?.target.value)
  }
  return(
    <>
      <p>{newTaskText}</p>
      <form onSubmit={handleCreateTask}>
        <input  onChange={handleTaskText}
                value={newTaskText}/>
        <button className={styles.btn} type="submit">
          <Plus size={16} />
          Nova Tarefa
        </button>
      </form>
    </>
  )
}
