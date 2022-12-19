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
                <img src={outlook} className='icons'></img><a href="mailto:adrian.afo@hotmail.com">adrian.afo@hotmail.com</a>
            </div>
            <div>
                <img src={github} className='icons'></img><a href="http://github.com/adrian-af" target='_blank'>github.com/adrian-af</a>
            </div>
            <div>
                <img src={linkedin} className='icons'></img><a href="http://linkedin.com/in/adrian-afo" target='_blank'>linkedin.com/in/adrian-afo</a>
            </div>
        </div>
    
    </div>)

}