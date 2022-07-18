import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MultClasses from 'classnames'

import styles from './TaskContent.module.css'
import { Task } from '../components/Task'
import imgEmpty from '../images/Empty.svg'

export interface TasksProps{
  id: string;
  title: string;
  isCompleted: boolean;
}

const tasks:TasksProps[]  = [];

export function TaskContent(){
  //const newkey = uuidv4();
  //const TaskList = [{id: newkey, title: 'tarefa 1 ', isComplete:false}]
  //console.log(TaskList);
  const [tasks, setTasks] = useState([]);//{id:'', title: '', isCompleted: false}
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    //const newCommentText = event.target.comment.value;
    const newkey = uuidv4();
    const newTask:TasksProps = {id: newkey, title: newTaskText, isCompleted: false};
    setTasks([...tasks, newTask]);
    setNewTaskText('');
    //event.target.comment.value = ''; 
  } 
   
  function handleNewTaskChange(event: ChangeEvent <HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }
  
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    console.log('Este campo é obrigatório');
    event.target.setCustomValidity('Este campo é obrigatório');
  }  

  function deleteTask(taskToDelete: string){
  
    const tasksWithoutDeleteOne = tasks.filter(task => {
       return task.id != taskToDelete; 
     })
     
     setTasks(tasksWithoutDeleteOne);
  }

  function completeTask(taskToCompleted: string){
    const tasksWithoutCompletedOne = tasks.map(task =>{
      if (task.id === taskToCompleted) return {...task, isCompleted: !task.isCompleted };
      else return task;
    });
    setTasks(tasksWithoutCompletedOne);
  }

   const isNewCommentEmpty = newTaskText.length == 0
   const type = tasks.length === 0 ? 'Active' : 'Inactive'
   const completeCount = tasks.length;
   const taskCount = tasks.filter(task => {
     return task.isCompleted; 
   }).length

   

  return(
    <div>
      <form  onSubmit={handleCreateNewTask} className={styles.taskForm}> 
        <input type="text"
          name = 'task'
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button 
          type='submit' 
          disabled={isNewCommentEmpty}
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
      <article>
        <header className={styles.taskListHeader}>
          <div className={styles.taskListHeaderL}>
            <strong>Tarefas criadas</strong>
            <span>{completeCount}</span>
          </div>
          <div  className={styles.taskListHeaderR}>
            <strong>Concluídas</strong>
            { tasks.length ==0 ? <span>0</span> : <span>{completeCount} de {taskCount}</span>}
          </div>
        </header>

        <div className={MultClasses(styles.taskListEmpty, styles[`taskListEmpty-${type}`])}>
          <p className={styles.taskListEmptyLine}></p>
          <img src={imgEmpty} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <div className={styles.taskList}>
          {tasks.map((task) => {
            return (
              <Task key={task.id} 
                id={task.id} 
                title={task.title} 
                isCompleted={task.isCompleted}
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask}
              />
            )
          })}
        </div> 
      </article>
    </div>  
  )
}