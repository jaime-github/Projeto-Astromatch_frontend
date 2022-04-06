import React, { Component } from 'react';
import { } from './styled'
import MainCadApaixonados from '../../components/MainCadServicos'
import Header_Pag1 from '../../components/Header_Pag1';
import FooterHome from '../../components/FooterHome';
import Footer_Pag1 from '../../components/Footer_Pag1';


export default function CadApaixonados() {
  return (
    <div>
        <Header_Pag1 />
            <MainCadApaixonados/>
        <FooterHome/>
        <Footer_Pag1/>
    </div>
  )
}
