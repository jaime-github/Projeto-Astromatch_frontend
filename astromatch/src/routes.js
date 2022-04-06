import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ListApaixonados from './pages/ListApaixonados';
import ListEscolhidos from './pages/ListEscolhidos';


class RoutesApp extends Component {
    render() {
        return (
            <BrowserRouter>            
            <Routes>
              <Route path="/" element ={<Home />}/>
              <Route path="/listApaixonados" element ={<ListApaixonados />}/>
              <Route path="/listEscolhidos" element ={<ListEscolhidos/>}/>
            </Routes>
          </BrowserRouter> 
        );
      }
    }

export default RoutesApp;






