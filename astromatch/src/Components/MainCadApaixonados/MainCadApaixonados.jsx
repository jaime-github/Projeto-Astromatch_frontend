import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderPages from '../Headers/HeaderPages';
import {ContainerCadApaixonados,ContainerLikes, Container, 
DivNomeIdade, Nome, Idade, Descricao} from './styled'
import {AiTwotoneLike,AiTwotoneDislike} from 'react-icons/ai';
import styled from "styled-components";


const ContainerImagens = styled.div`
  height: 400px;
  width: 80%;
  overflow: hidden;
  background-image: url(${props => props.photo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: cover;
  object-position: 60% top; */
`

const MainCadApaixonados = (props) => {
  
    const [perfilPessoas, setPerfilPessoas] = useState ("")


    useEffect (() => {
        mostraPerfil ()
    },[])

    const cliqueLike = ((idPerfil) => {
        const body = {
            id: idPerfil,
            choice: true
        }
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaime/choose-person"
        axios.post(url,body)
        .then (response => {
            mostraPerfil ()
        })
        .catch (error => {
            console.log (error)
        })
    })
    
    const cliqueDislike = ((idPerfil) => {
        const body = {
            id: idPerfil,
            choice: false
        }
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaime/choose-person"
        axios.post(url,body)
        .then (response => {
            mostraPerfil ()
        })
        .catch (error => {
            console.log (error)
        })
    })
    
    const mostraPerfil = () => {
        
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaime/person"
        
        axios.get(url)
        .then (response => {
            setPerfilPessoas (response.data.profile)
        })
        .catch (error => {
            console.log (error)
        })        
    }
    return (
        <ContainerCadApaixonados>
            <HeaderPages tela={props.tela} visualizarTela1={props.visualizarTela1} visualizarTela3={props.visualizarTela3}/>
            
                <ContainerImagens photo={perfilPessoas.photo}></ContainerImagens> 
            <Container>                
            <DivNomeIdade> 
                <Nome>{perfilPessoas.name}</Nome>
                <Idade>{perfilPessoas.age}</Idade>    
            </DivNomeIdade>
                <Descricao>{perfilPessoas.bio}</Descricao>                               
            </Container>

            <ContainerLikes>
                <button className='dislike' onClick={() => cliqueDislike(perfilPessoas.id)}><AiTwotoneDislike/></button>
                <button className='like' onClick={() => cliqueLike(perfilPessoas.id)}><AiTwotoneLike/></button>                 
            </ContainerLikes>            
        </ContainerCadApaixonados>
        );
    }

export default MainCadApaixonados; 