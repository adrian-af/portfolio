import React, { useState } from "react";
import phplogo from "./img/PHP-logo.png";
import javascriptLogo from "./img/JavaScript-logo.svg";
import reactLogo from './img/React-logo.svg';
import mysqlLogo from "./img/mysql-logo.png";

export const About = () => 
{
    return(
    <div className="card" id='aboutCard'>
        <h1>Sobre mí</h1>
        <p>Soy Adrián Fernández Ortega, un programador Fullstack de Madrid.</p>
        <p>He realizado un bootcamp Fullstack en La Rueca y actualmente estoy cursando el Grado Superior de Desarrollo de Aplicaciones Web.</p>
        <p>Tengo también formación universitaria en Traducción.</p>
        <p>Las tecnologías que uso son:</p>
        <div id='divLogos' class='card'>
            <img src={phplogo} alt='logo de PHP' className='logos'></img>
            <img src={javascriptLogo} alt='logo de JavaScript' className='logos'></img>
            <img src={reactLogo} alt='logo de React' className='logos'></img>
            <img src={mysqlLogo} alt='logo de MySQL' className='logos'></img>
        </div>
    </div> );
}