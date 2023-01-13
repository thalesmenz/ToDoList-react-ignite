import { NumberTasks } from "./NumberTasks";
import Styles from './ContainerTasks.module.css'
import { ContainerComments } from "./ContainerComments";
import { useState } from "react";

type propsContainerTasks= {
    tasksCreated: string[]
    setTaskCreated: (value:string[]) => void
    NumberOfTasks: number
    cauntDeleteNumberTasks: () => void
    seeComments: boolean
    setSeeComments: (value: boolean) => void
}

export function ContainerTasks({tasksCreated,setSeeComments, setTaskCreated, NumberOfTasks, cauntDeleteNumberTasks, seeComments}: propsContainerTasks) {

    const [numbersOfCheckd, setnumbersOfCheckd] = useState(0)

    return (
        <div className={Styles.divBody}>
            <div className={Styles.ContainerElements}>
                <NumberTasks numbersOfCheckd={numbersOfCheckd} NumberOfTasks={NumberOfTasks} />
                <ContainerComments 
                setSeeComments={setSeeComments}
                seeComments={seeComments}
                setnumbersOfCheckd={setnumbersOfCheckd}
                numbersOfCheckd={numbersOfCheckd}
                cauntDeleteNumberTasks={cauntDeleteNumberTasks}
                setTaskCreated={setTaskCreated} 
                tasksCreated={tasksCreated} 
                />
            </div>
            
        </div>
    )
}