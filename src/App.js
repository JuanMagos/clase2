import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ClassComponent from './components/types/Class';
import FunctionalComponent from './components/types/Functional';

let booleanTst = false;

const color = booleanTst ? 'red' : 'blue';

const styles = {
  title: {
    backgroundColor: color,
  },
  typesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
};
const personaFuncion = {
  nombre: 'Juan',
  apellido: 'Perez',
};
const personaClase = {
  nombre: 'Juan',
  apellido: 'Perez',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div style={styles.typesContainer}>
          <ClassComponent
            nombre={personaClase.nombre}
            apellido={personaClase.apellido}
            edad="30"
          />
          {/* <FunctionalComponent {...persona} /> */}
          <FunctionalComponent
            nombre={personaFuncion.nombre}
            apellido={personaFuncion.apellido}
            children={<img src={logo} className="App-logo" alt="logo" />}
          />
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={styles.title} o>
          Edit <code>src/App.js</code> and save to reload Holaaaaaaaaaaaa.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
