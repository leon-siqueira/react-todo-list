import { Plus } from "phosphor-react";
import { FormEvent, useContext, useState } from "react"
import styles from "./CreateTask.module.scss"
import { TasksContext } from "../App";


export function CreateTask() {

  const { submit } = useContext(TasksContext)

  const [newTaskText,setNewTaskText] = useState('')

  function handleCreateTask(event:FormEvent) {
    event.preventDefault();
    submit(newTaskText)
  }

  return(
    <>
      <form onSubmit={handleCreateTask}
            className={styles.formWrapper}>
        <input  onChange={(e) => setNewTaskText(e.target.value)}
                value={newTaskText}
                className={styles.input}
                placeholder="Escreva sua tarefa..."
                required/>
        <button className={styles.btn}
                type="submit">
          <Plus size={'1.3rem'} />
          <span> Nova Tarefa</span>
        </button>
      </form>
    </>
  )
}
