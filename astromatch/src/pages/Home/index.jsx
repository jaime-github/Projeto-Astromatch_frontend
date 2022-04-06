import React, { Component } from 'react';
import {ContainerHome} from './styled';
import MainHome from '../../Components/MainHome/MainHome'
import FooterHome from '../../Components/FooterHome'


class Home extends Component {
  render() {
    return (
        <ContainerHome>            
            <MainHome/>                
            <FooterHome/>
        </ContainerHome>
        );
    }
}

export default Home;








