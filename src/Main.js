import React, { useState } from "react";
import "./Main.css";
import { Work } from "./Work";
import {About} from "./About";
import {Contact} from "./Contact";
import ham from "./img/menu.svg";
import close from "./img/close.png";

export const Main = () => 
{
  let [bigWork, setBigWork] = useState(false);
  let [bigAbout, setBigAbout] = useState(false);
  let [bigContact, setBigContact] = useState(false);
  let [modal, setModal] = useState(0);
  let [menu, setMenu] = useState(0);
  const menus = [
    {
      nav: "Proyectos",
      stateClass: bigWork,
      eventMouseIn: () => setBigWork(true),
      eventMouseOut: () =>setBigWork(false),
      
    },
    {
      nav: "Sobre mí",
      stateClass: bigAbout,
      eventMouseIn: () => setBigAbout(true),
      eventMouseOut: () => setBigAbout(false),
      
    },
    {
      nav: "Contacto",
      stateClass: bigContact,
      eventMouseIn: () => setBigContact(true),
      eventMouseOut: () => setBigContact(false),
      
    },
  ];
  
  return (
    <div>
        <nav className="card desktop">
            {menus.map((data, i) => {
            return (
              <div>
                <h2
                key={i}
                className={data.stateClass ? "bigger" : "normal"}
                onMouseOver={data.eventMouseIn} onMouseOut={data.eventMouseOut} onClick={()=>setModal(i) }
                >
                {data.nav}
                </h2>
              </div>
            );
            })}
        </nav>
        <nav className="card movil">
            <img src={ham} id='hamburger' onClick={()=>menu===0? setMenu(1): setMenu(0)} alt='icono menú'></img>
            </nav>
        {
          menu === 1 &&
           <div>
           <div id='fondoModalMenu'>
              <div id='modalMenu'>
                <img src={close} id='close' onClick={()=>menu===0? setMenu(1) : setMenu(0)} alt='icono cerrar'></img>
                <div id='pags'>
                  <h2 onClick={()=>{setModal(0); setMenu(0);}}>Proyectos</h2>
                  <h2 onClick={()=>{setModal(1); setMenu(0);}}>Sobre mí</h2>
                  <h2 onClick={()=>{setModal(2); setMenu(0);}}>Contacto</h2>
                </div>
              </div>
            </div>
            </div>
          }

        <div>
            {modal === 0 ? <Work/> : modal === 1 ? <About/> : <Contact/>}
        </div>

    </div>
  );
};
function toggleModalMenu(menu)
{
  
}
