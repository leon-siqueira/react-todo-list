import { ChangeEvent, useState } from "react"
import styles from "./Task.module.scss"

export interface Task{
  id: number,
  description: string,
  isDone: boolean
}

export function Task({ id, description, isDone }:Task) {
  const [done, setDone] = useState(isDone)
  const [task, setTask] = useState({  id: id,
                                      description: description,
                                      isDone: done})

  function handleDone(event:ChangeEvent<HTMLInputElement>) {
    setDone(event.target.checked)
    const taskNewStatus:Task = { id: id,
                                 description: description,
                                 isDone: done}
    setTask(taskNewStatus)
  }

  return (
    <>
      <label>
        <div className={done ? styles.done : styles.undone}>
          <input type="checkbox"
                checked={done}
                onChange={handleDone}
                className={styles.checkbox} />
            {description}
        </div>
      </label>
    </>
  )
}
