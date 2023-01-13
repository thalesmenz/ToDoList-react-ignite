import Styles from './Header.module.css'
import { PlusCircle, Rocket } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

type propsHeader = {
    tasking: string,
    setTasking(value: string): void,
    tasksCreated: string[],
    setTaskCreated: (value: string[]) => void
    cauntNumberTasks: () => void
    setSeeComments: (value: boolean) => void
}

export function Header ({tasking, setTasking, tasksCreated, setTaskCreated, cauntNumberTasks, setSeeComments}: propsHeader ) {


    function taskCreating(event: ChangeEvent<HTMLInputElement>) {
        setTasking(event.target.value)
    }
    
    function ClickInput() {
        setTaskCreated([...tasksCreated, tasking])
        setTasking('')
        cauntNumberTasks()
        setSeeComments(true)
    }


    return (
        <header className={Styles.header}>
            <div className={Styles.containerHeader}>
            <Rocket className={Styles.rocket} size={50} />
              <h1>todo</h1>
            </div>
            <div className={Styles.taskCreator}>
                <input onChange={taskCreating} value={tasking} type="text" placeholder='Adicione uma nova tarefa' />
                <button disabled={tasking == ''} onClick={ClickInput}>Criar<PlusCircle size={20} /></button>
            </div>
        </header>
    )
}