import Styles from './NumberTasks.module.css'

type propsNumberTasks = {
    NumberOfTasks: number,
    numbersOfCheckd: number
}

export function NumberTasks({NumberOfTasks, numbersOfCheckd}:propsNumberTasks) {

    return (
        <div className={Styles.containerNumberTasks}>
            <div className={Styles.container}>
                <p className={Styles.tarefasCriadas}>Tarefas criadas</p>
                <p className={Styles.number}>{NumberOfTasks}</p>
            </div>
            <div className={Styles.container}>
            <p className={Styles.concluidas}>Concluidas</p>
            <p className={Styles.number}>{numbersOfCheckd} de {NumberOfTasks}</p>
            </div>
        </div>
    )
}