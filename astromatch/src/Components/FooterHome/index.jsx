import React, { Component } from 'react';
import styled from 'styled-components';

const BotaoEntrar = styled.button`
    background-color: #4BA397;
    padding: 5px 10px;
    border-radius: 15px;
    border: none;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    transition: 300ms ease;
    :hover {
        background-color: #4BA360;
        box-shadow: 2px 2px 6px gray;
        
    };


`


export default function FooterHome (props) {
  
       return (        
             
            <BotaoEntrar onClick={props.trocaTela}>Entrar Aqui</BotaoEntrar>              
                       
        );
    }

