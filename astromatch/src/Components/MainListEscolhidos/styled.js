import styled from 'styled-components';

    export const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        
    `

export const Imagens =  styled.img`
width: 50px;
height: 50px;
border-radius: 28px;

`

export const FotoNome =  styled.div`
    display:flex;
    margin: 10px;
    padding-left: 2em;
    &:hover{
        background-color: lightblue;
    }
`
export const Nome =  styled.p`
    padding-left: 2em;
`

