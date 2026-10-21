import React from 'react'
import { createRoot } from 'react-dom/client'

function SpecialButton({text}){
  return(
    <button>{text}</button>
  )
}



createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div>
      <img src=" https://i.ibb.co/gbZzxMJ6/49317358-7773-4-B8-B-9-C5-B-00-E3-D6-A9-E1-ED.jpg" alt="Descripción de la imagen" />
      <p>Loquito</p>
      <SpecialButton text={"Morado"}></SpecialButton>
      <hr></hr>
      <img src="https://i.ibb.co/tMvPswTf/8-E43-FD66-B4-F0-4-BA0-BF44-A331-DD3504-B0.jpg" alt="Descripción de la imagen" />
      <p>Dealer</p>
     <SpecialButton text={"Menez"}></SpecialButton>
     <hr></hr>
      <img src="https://i.ibb.co/GvzyncC3/IMG-1229.png" alt="Descripción de la imagen" />
      <p>Caballero</p>
      <SpecialButton text={"Ñua"}></SpecialButton>
     <hr></hr>
      <img src="https://i.ibb.co/WW0QzDTs/unnamed.png" alt="Descripción de la imagen" />
      <p>megaFrente</p>
      <SpecialButton text={"button"}></SpecialButton>
    </div>

  </React.StrictMode>,
)