import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css'
import MultClasses from 'classnames'

import checked from '../images/Checked.svg'
import { TasksProps } from './TaskContent';

interface TaskProps extends TasksProps {
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}


// interface TaskProps{
//   id: string;
//   title: string;
//   isComplete: boolean;

// }

export function Task({id, title, isCompleted, onDeleteTask, onCompleteTask}: TaskProps){
  function handleDeleteTask() {
    onDeleteTask(id);
  }  

  function handleCompleteTask() {
    onCompleteTask(id);
  }  
  const type = isCompleted ? 'Checked' : 'NoChecked'
  return(
    <div className={styles.taskBox}>
      <div>
        <button 
          onClick={handleCompleteTask} 
          title="Tarefa concluída" 
          //className={styles.completeTaskButton}
          className={MultClasses(styles.completeTaskButton, styles[`completeTaskImg-${type}`])}
        >
          {/* { isCompleted ? (<img src={checked} alt="checkbox"/>) : (<Circle size={18} />) } */}
          { isCompleted ? (<CheckCircle size={24} weight="fill"/>) : (<Circle size={24} />) }

        </button>        
        <p className={MultClasses(styles.tasktitle, styles[`completeTaskText-${type}`])}>{title}</p> 
      </div>  
      <button onClick={handleDeleteTask} title="Excluir tarefa" className={styles.deleteButton}>
        <Trash size={20} />
      </button>        
    </div>        
  )
}

