import React, { useState, useEffect } from "react";
import HeaderPages from "../Headers/HeaderPages";
import axios from "axios";
import { Imagens, ContainerLista, FotoNome, Nome } from "./styled";

const MainListEscolhidos = (props) => {
  const [pessoasEscolhidas, setPessoasEscolhidas] = useState([]);

  useEffect(() => {
    escolhePessoas();
  }, []);

  const escolhePessoas = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jaime/matches";

    axios
      .get(url)
      .then((response) => {
        setPessoasEscolhidas(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const listaEscolhidos = pessoasEscolhidas.map((escolhidos) => {
    return (
      <FotoNome>
        <Imagens src={escolhidos.photo} />
        <Nome> {escolhidos.name} </Nome>
      </FotoNome>
    );
  });
    return (
      <ContainerLista>
        <HeaderPages tela={props.tela} visualizarTela1={props.visualizarTela1} visualizarTela2={props.visualizarTela2} />
        {listaEscolhidos}
      </ContainerLista>
  );
};

export default MainListEscolhidos;
