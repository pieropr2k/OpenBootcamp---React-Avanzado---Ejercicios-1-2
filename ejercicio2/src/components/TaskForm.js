import { useState } from 'react'
import { useField } from '../hooks/useField'

export const TaskForm = ({ addTask, emptyTaskList, sortList, invertList }) => {
    const [taskFormFunction, setTaskFormFunction] = useState('create')
    const taskName = useField('text')

    const handleSetTaskFormFunction = (theFormWillUse) => () => {
        return setTaskFormFunction(theFormWillUse)
    }

    const chooseButtonFunction = (taskFormFunctionName) => {
        switch (taskFormFunctionName) {
            case 'create':
                addTask(taskName.value)
                taskName.reset()
                break;
            case 'clearAll':
                emptyTaskList()
                break;
            case 'sort':
                return () => sortList();
            case 'invert':
                return () => invertList();
            default:
                console.log('Lo lamentamos, por el momento no disponemos de ' + taskFormFunction + '.');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        chooseButtonFunction(taskFormFunction)
    }

    return (
        <div>
            <h2>Crea una nueva tarea:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Content:
                    <input
                        {...taskName}
                        reset=''
                    />
                </div>
                <p>¡Utiliza los botones para manipular la lista de tareas!</p>
                <button onClick={handleSetTaskFormFunction('create')}>Crear nueva tarea</button>
                <button onClick={handleSetTaskFormFunction('clearAll')}>Eliminar todas las tareas</button>
            </form>
            <button type='button' onClick={chooseButtonFunction('sort')}>Ordenar las tareas</button>
            <button type='button' onClick={chooseButtonFunction('invert')}>Invertir las tareas</button>
        </div>
    )
}