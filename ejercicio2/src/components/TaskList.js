export const TaskList = ({ taskList, deleteTask }) => {
    return (
        <div>
            <h2>Lista de tareas:</h2>
            <ul>
                {taskList.map((task, index) =>
                    <div key={index}>
                        <p>{`Tarea: ${task}`}</p>
                        <button onClick={() => deleteTask(index)}>Eliminar tarea</button>
                    </div>
                )}
            </ul>
        </div>
    )
}