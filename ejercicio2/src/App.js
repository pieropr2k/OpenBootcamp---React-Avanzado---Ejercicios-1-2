import './App.css';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import useList from './hooks/useList';

function App() {
  const listHook = useList(['robo'])

  return (
    <div className="App">
      <TaskForm
        addTask={listHook.push}
        emptyTaskList={listHook.empty}
        sortList={listHook.sortList}
        invertList={listHook.invert}
      />
      <TaskList taskList={listHook.value} deleteTask={listHook.remove} />
    </div>
  );
}

export default App;