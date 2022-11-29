import React from "react";
import listaO from './img/lista-original.png';
import listaH from "./img/lista-hover.png";
import { useState } from "react";
import foroO from "./img/foro-original.png";
import foroH from "./img/foro-hover.png";

export const Work = () =>
{
    let [lista, setLista] = useState(false);
    let [foro, setForo] = useState(false);
    let listaFoto, listaSpan; 
    let foroFoto, foroSpan;
    {lista ? listaFoto = listaH : listaFoto = listaO}   
    {lista ? listaSpan =  <span id='textoLista'>Proyecto grupal de lista de la compra con JavaScript puro</span> : listaSpan = <span></span>}

    {foro ? foroFoto = foroH : foroFoto = foroO}
    {foro ? foroSpan = <span id='textoForo'>Proyecto grupal de aplicación de foro</span> : foroSpan = <span></span>}

    return(
        <div className='card' id='divWork'>
            <h1>Proyectos</h1>
            <div id='proyectos'>
                <div id='proyecto1' className='proyectosDiv'  >
                    <p id='lista' className='proyectos' style={{backgroundImage: `url(${listaFoto})`}} 
                    onMouseEnter={(e)=>setLista(true)} 
                    onMouseLeave={()=>setLista(false)}    
                    onClick={()=>window.open( "https://peaceful-gnome-cea424.netlify.app/", "_blank","noopener,noreferrer")}                
                    >
                        {listaSpan}
                    </p>
                    <p onClick={()=>window.open("https://peaceful-gnome-cea424.netlify.app/", "_blank","noopener,noreferrer")} id='tituloLista'>Lista de la compra</p>
                </div>
                <div id='proyecto2' className='proyectosDiv'>
                    <p id='foro' className='proyectos' style={{backgroundImage: `url(${foroFoto})`}} 
                    onMouseEnter={(e)=>setForo(true)} 
                    onMouseLeave={()=>setForo(false)}    
                    onClick={()=>window.open( "https://afrodbook.000webhostapp.com/FRONTEND/index.html", "_blank","noopener,noreferrer")}                
                    >
                        {foroSpan}
                    </p>
                    <p onClick={()=>window.open("https://afrodbook.000webhostapp.com/FRONTEND/index.html", "_blank","noopener,noreferrer")} id='tituloForo'>Foro</p>

                </div>

            </div>
        </div>
    );
}