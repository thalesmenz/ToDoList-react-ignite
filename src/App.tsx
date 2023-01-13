import "./global.css"
import { Header } from './components/Header'
import { ContainerTasks } from "./components/ContainerTasks"
import { useState } from 'react'


function App() {

  const [tasking, setTasking] = useState('')
  
  const [tasksCreated, setTaskCreated] = useState([] as string[])

  const [NumberOfTasks, setNumberOfTasks] = useState(0)

  const [seeComments, setSeeComments] = useState(false)

  function cauntNumberTasks() {
    const tasks = tasksCreated.length + 1 
    setNumberOfTasks(tasks)
}

function cauntDeleteNumberTasks() {
  const tasks = tasksCreated.length - 1
  setNumberOfTasks(tasks)
}

  return (
    
    <div>
      <Header 
      setSeeComments={setSeeComments}
      cauntNumberTasks={cauntNumberTasks}
      tasksCreated={tasksCreated} 
      setTaskCreated={setTaskCreated} 
      tasking={tasking}
      setTasking={setTasking} />

      <ContainerTasks 
      setSeeComments={setSeeComments}
      seeComments={seeComments}
      cauntDeleteNumberTasks={cauntDeleteNumberTasks}
      NumberOfTasks={NumberOfTasks}
      setTaskCreated={setTaskCreated} 
      tasksCreated={tasksCreated} 
      />
    </div>
  )
}

export default App
