import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import button from './components/button';

function App() {
  const manejarClic = () =>{
    console.log("Clic");

  }
  const reiniciarContador  = () =>{
    console.log("Reiniciar");

  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src='{freeCodeCampLogo}'
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <button
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <button
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
