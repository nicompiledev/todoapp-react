import './App.css';
import Logo from './components/Logo';
import Tarea from './components/Tarea';
import TareaFormulario from './components/TareaFormulario';

function App() {
  return (
    <div className='App'>
      <Logo/>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <TareaFormulario/>
      </div>
      
    </div>
  );
}

export default App;
