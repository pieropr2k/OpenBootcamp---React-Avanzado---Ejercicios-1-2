import './App.css';
import useCounter from './hooks/useCounter';

function App() {
  const counterHook = useCounter()
  // El valor por defecto del step es 5
  // Los mínimos y máximos valores son -20 y 20 respectivamente
  return (
    <div className="App">
      <div>
        <h2>Ejercicio1 ReactJS Avanzado - OpenBootcamp</h2>
        <h2>{(counterHook.value >= counterHook.minimumValue && counterHook.value <= counterHook.maximumValue) ? counterHook.value : 'No es posible usar la app'}</h2>
        <h3>{`Mínimo valor: ${counterHook.minimumValue}`}</h3>
        <h3>{`Máximo valor: ${counterHook.maximumValue}`}</h3>
      </div>
      <div>
        <p>Para modificar el valor del contador, presiona estos botones:</p>
        <button onClick={counterHook.increment}>increment</button>
        <button onClick={counterHook.decrement}>decrement</button>
        <button onClick={counterHook.reset}>reset</button>
      </div>
    </div>
  );
}

export default App;