import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Button from './components/button';
import Counter from './components/counter';
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
    console.log("Clic");

  }
  const reiniciarContador  = () => {
    //console.log("Reiniciar");
    setNumClics(0);

  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Counter numClics={numClics} />
        <Button
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Button
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
