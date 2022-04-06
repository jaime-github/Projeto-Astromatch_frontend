import React, { useState } from 'react'
import {GlobalStyled} from './GlobalStyled'
import MainCadApaixonados from './Components/MainCadApaixonados/MainCadApaixonados';
import MainListEscolhidos from './Components/MainListEscolhidos/MainListEscolhidos';
import MainHome from './Components/MainHome/MainHome';


export default function App(props) {

  
  const [telaAtual, setTelaAtual] = useState("Home")

  const visualizarTela1 = () => {
      setTelaAtual ("Home")
  }

  const visualizarTela2 = () => {
      setTelaAtual ("CadApaixonados")
  }

  const visualizarTela3 = () => {
      setTelaAtual ("ListEscolhidos")
  }

  const trocarTela = () => {
      switch (telaAtual) {
          case "Home": 
              return <MainHome visualizarTela2={visualizarTela2}/>
          case "CadApaixonados": 
              return <MainCadApaixonados tela={telaAtual} visualizarTela1={visualizarTela1} visualizarTela3={visualizarTela3}/>
          case "ListEscolhidos": 
              return <MainListEscolhidos tela={telaAtual} visualizarTela1={visualizarTela1} visualizarTela2={visualizarTela2}/>
              default:
                  return <MainHome/>
      }
  }
  
  return (
      <div>
         <GlobalStyled/>
         {/* <RoutesApp/> */}
         {trocarTela()}
      </div>
    )
}


