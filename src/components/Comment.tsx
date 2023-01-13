import Styles from './Comment.module.css'
import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'

type comment = {
    content: string
    tasksCreated: string[]
    setTaskCreated: (value:string[]) => void
    cauntDeleteNumberTasks: () => void
    numbersOfCheckd: number
    setnumbersOfCheckd: (value: number) => void
    setSeeComments: (value: boolean) => void
}


export function Comment({content, setSeeComments, numbersOfCheckd, setnumbersOfCheckd, tasksCreated, setTaskCreated, cauntDeleteNumberTasks}:comment ) {

    const [check, setCheck] = useState(false)

    const [styleCheck, setStyleCheck] = useState(true)

    function handleChecked() {
        if (check == false) {
            setCheck(true)
            setnumbersOfCheckd(numbersOfCheckd + 1)
            setStyleCheck(false)
        } 
        else if (check == true) {
            setCheck(false)
            setnumbersOfCheckd(numbersOfCheckd - 1)
            setStyleCheck(true)
        }
        return numbersOfCheckd
    }

    function handleDeleteTask() {
        const newtasksCreated = tasksCreated.filter(item => {
            return (
                item !== content
                )})
                setTaskCreated(newtasksCreated)
                cauntDeleteNumberTasks()
                if(check == true && numbersOfCheckd > 0) {
                    setnumbersOfCheckd(numbersOfCheckd - 1)
                }
                if(newtasksCreated.length == 0) {
                    setSeeComments(false)
                }      
    }


    return (
        <div className={Styles.comment}>
            <div className={Styles.divCheck}>
                <label className={styleCheck ? Styles.label : Styles.labelChecked }>
                    <p className={Styles.check}>{styleCheck ? '' : <Check size={12} /> }</p> 
                    <input className={Styles.checkbox} type="checkbox" onChange={handleChecked} />
                </label>
            </div>
            <div className={Styles.divContent}>
                <p className={check ? Styles.noCheckOnP : Styles.checkOnP}>{content}</p>
            </div>
            <div className={Styles.divTrash}>
                <Trash onClick={handleDeleteTask} size={20} className={Styles.trash} />
            </div>
        </div>
    )
}