import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskContent } from './components/TaskContent'


// const TaskList = [
//   { id: 1,//uuidv4(),
//     title: 'Tarefa 1',
//     isComplete: false
//   },
//   { id: 2,//uuidv4(),
//     title: 'Tarefa 2',
//     isComplete: false
//   },
//   { id: 3,
//     title: 'Tarefa 3',
//     isComplete: false
//   },
//   { id: 4,
//     title: 'Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefa 4 Tarefas     4 Tarefas 4 Tarefas 4 Tarefas 4 Tarefas 4 Tarefas 4 Tarefas 4',
//     isComplete: false
//   }
// ]

export function App() {
   
  return(
    <div>
      <Header />
      <div  className={styles.wrapper}>
        <main> 
          <TaskContent />
        </main>
      </div>
    </div>  
  )
}
