import React from "react";
import '../css/button.css';
function button ({ texto, esBotonDeClic, manejarClic }) {
   return (
      <button 
         className={esBotonDeClic ? 'boton-clic': 'boton-reiniciar'}
         onClick={manejarClic}>
         {texto}
      </button>
   );
}
export default button;