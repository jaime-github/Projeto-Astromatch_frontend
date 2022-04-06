import React, { useState, useEffect } from 'react';
import {ContainerHome} from './styled';
import FooterHome from '../../Components/FooterHome';
import axios from 'axios';

export default function MainHome (props) {

    const limparCache = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaime/clear"
        
        axios.put(url)
        .then (response => {
            alert ("Seus Dados foram resetados, pode continuar!!")
        })
        .catch (error => {
            alert ("Ops, algo deu errado, por favor tente novamente!!")
        })        
    }
    
    return (
        <ContainerHome>                             
                <img src="https://i.postimg.cc/wxk9VzLz/logo-Cadeado.png"/>
                <h1>Astromatch</h1>
                <h2>Encontre Sua Outra Metade da Laranja</h2>
                <FooterHome trocaTela={props.visualizarTela2}/>
                <button onClick={limparCache}>Limpar Cache</button>                 
        </ContainerHome>
        );
    }



