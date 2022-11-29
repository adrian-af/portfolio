import React, { useState } from "react";
import outlook from './img/Outlook.png';
import github from "./img/github.svg";
import linkedin from "./img/linkedin.svg";

export const Contact = () => 
{
    return(
    
    <div className='card' id='divContact'>
        <h1>Contacto</h1>
        <div id='contacts'>
            <div>
                <img src={outlook} className='icons'></img>adrian.afo@hotmail.com
            </div>
            <div>
                <img src={github} className='icons'></img>github.com/adrian-af
            </div>
            <div>
                <img src={linkedin} className='icons'></img>linkedin.com/in/adrian-afo
            </div>
        </div>
    
    </div>)

}