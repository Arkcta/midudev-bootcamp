import './App.css';
import Mensaje from './Mensaje.js'

const description = () => {
  return (<p>
    Esta es la app del curso de fullstack bootcamp
  </p>
  )
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando"/>
      <Mensaje color="green" message="En un curso"/>
      <Mensaje color="yellow" message="DE React"/>
    </div>
  );
}

export default App;
