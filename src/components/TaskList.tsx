import { useContext } from "react";
import { TasksContext } from "../App";
import { Task } from "./Task";
import styles from "./TaskList.module.scss"


export function TaskList () {
  const { tasks } = useContext(TasksContext)

  return (
    <>
      <div className={styles.wrapper}>
        {
          tasks.map(task => <Task key={task.id} id={task.id} isDone={task.isDone} description={task.description}/>)

        }

      </div>
    </>
  )
}
