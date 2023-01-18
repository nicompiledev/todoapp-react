import './App.css';
import Logo from './components/Logo';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className='App'>
      <Logo/>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <Tarea texto='Aprender React'/>
      </div>
      
    </div>
  );
}

export default App;
