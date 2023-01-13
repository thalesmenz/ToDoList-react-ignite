import { ClipboardText } from 'phosphor-react'
import { useState } from 'react'
import { Comment } from './Comment'
import Styles from './ContainerComments.module.css'

type propsContainerComments = {
    tasksCreated:string[]
    setTaskCreated: (value:string[]) => void
    cauntDeleteNumberTasks: () => void
    numbersOfCheckd: number
    setnumbersOfCheckd: (value: number) => void
    seeComments: boolean
    setSeeComments: (value: boolean) => void

}

export function ContainerComments({tasksCreated,setSeeComments, setnumbersOfCheckd, seeComments, numbersOfCheckd ,setTaskCreated, cauntDeleteNumberTasks}: propsContainerComments) {
    return (
        <div className={Styles.ContainerComments}>

            {seeComments == false ?

                <div className={Styles.empityTasks}>
                    <ClipboardText className={Styles.clipBoard} size={50} />
                    <p className={Styles.p1}>Você ainda não tem tarefas cadastradas</p>
                    <p className={Styles.p2}>Crie tarefas e organize seus itens a fazer</p>
                </div>             

             : 

             tasksCreated.map(task => {
                if(task != '') {
                return (
                    <Comment 
                    setSeeComments={setSeeComments}
                    setnumbersOfCheckd={setnumbersOfCheckd}
                    numbersOfCheckd={numbersOfCheckd}
                    cauntDeleteNumberTasks={cauntDeleteNumberTasks}
                    setTaskCreated={setTaskCreated}
                    tasksCreated={tasksCreated} 
                    key={task} 
                    content={task} />
                )
            }})
        }
        </div>
    )
}