import React, { useState, useEffect } from 'react';
import {Header} from './styled'
import {AiTwotoneHome, AiTwotoneHeart} from 'react-icons/ai';
import {FaUsers} from 'react-icons/fa';



const HeaderPages = (props) => {
    let botoes 
        switch (props.tela) {
            case "CadApaixonados": 
            botoes = <button onClick={props.visualizarTela3}><AiTwotoneHeart/></button>
            break;
            
            case "ListEscolhidos": 
            botoes = <button onClick={props.visualizarTela2}><FaUsers/></button>
                break;  
                    default: botoes = <div></div>
        }
    
    return(           
            <Header>
                <button onClick={props.visualizarTela1}><AiTwotoneHome/></button>
                <div className="logo">
                <h2 className="verde">Astro</h2> 
                <h2 className="roxo">match</h2> 
                </div>
                {botoes}
            </Header>
    )
}

export default HeaderPages 