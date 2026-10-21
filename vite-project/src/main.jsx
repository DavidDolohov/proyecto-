import React from 'react'
import { createRoot } from 'react-dom/client'

function SpecialButton({text}){
  return(
    <button>{text}</button>
  )
}
function Especialtxt({text}){
  return(
      <p>{text}</p>
    
  )
}function EspecialImg({url}){
  return(
    <img src={url} />
      
  )
}


createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div>
      <EspecialImg url="https://i.ibb.co/gbZzxMJ6/49317358-7773-4-B8-B-9-C5-B-00-E3-D6-A9-E1-ED.jpg"></EspecialImg>
      <Especialtxt text="Loquito"></Especialtxt>
      <SpecialButton text={"Morado"}></SpecialButton>
    </div>

    <div>
      <EspecialImg url="https://i.ibb.co/tMvPswTf/8-E43-FD66-B4-F0-4-BA0-BF44-A331-DD3504-B0.jpg"></EspecialImg>
      <Especialtxt text="Dealer"></Especialtxt>
     <SpecialButton text={"Menez"}></SpecialButton>
    </div>

    <div>
      <EspecialImg url="https://i.ibb.co/GvzyncC3/IMG-1229.png"></EspecialImg>
      <Especialtxt text="Caballero"></Especialtxt>
      <SpecialButton text={"Ñua"}></SpecialButton>
     </div>

     <div>
      <EspecialImg url="https://i.ibb.co/WW0QzDTs/unnamed.png"></EspecialImg>
      <Especialtxt text="Megafrente"></Especialtxt>
      <SpecialButton text={"button"}></SpecialButton>
    </div>

  </React.StrictMode>,
)