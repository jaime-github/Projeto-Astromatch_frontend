import styled from "styled-components";

export const ContainerCadApaixonados = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  flex-wrap: nowrap;
  align-items: center;
`;

export const Imagens = styled.img`
  /* max-height: 200px; */
`;


export const Div = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const ContainerLikes = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  position: absolute;
  position: fixed;
  bottom: 10%;
  
  button {
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 50px;
    border: none;
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    cursor: pointer;
    transition: 300ms ease;
    :hover {
      box-shadow: 2px 2px 6px gray;
    }
  }
  .like {
      background-color: #336AEE;
      :hover {
          background-color: #1D4CBC;
      }
  }
  .dislike {
      background-color: lightcoral;
      :hover {
          background-color: #DD352E;
      }
  }
`

export const Container = styled.div`
    height: 30%;
    position: relative;
    text-align: center;
    align-items: center;
    bottom: 150px;
    width: 70%;    
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 0px;
    z-index: 2;
    margin: -20px;
`

export const DivNomeIdade = styled.div`
    display: flex;
    align-items: baseline;
    text-align: center;
    `


export const Nome = styled.div`
   font-weight: bold;
      font-size: 24px;
      text-align: center;
      `


export const Idade = styled.div`
    margin-left: 10px;
    font-size: 20px;
    text-align: center;
    `

export const Descricao = styled.p`
    display: block;
    padding: 10px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
`

