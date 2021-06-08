//EN REACT DISPONEMOS DE DOS TIPOS DE COMPONENTES: 
//- FUNCIONALES 
// - TIPO CLASE: Estan definidos mediante una clase - Tienen un metodo importante llamado render - 
//               Antes podiamos guardar un state - Tienen algo llamado ciclos de vida de los componentes -
//  state y lifecycle methods no los tenian los componentes de tipo function - Antes usabamos los tipo function solo para devolver jsx
import React, { Component, Fragment } from "react";
import Header from './componentes/header/Header';
import Button from './componentes/buttons/Button';
import SimpleMenu from './componentes/Menu/SimpleMenu';
import './App.css';
import Section from "./componentes/Section/Section";
//Componentes de tipo Clase
//Componentes de tipo function, representacionales, dummy, stateless
//Las clases tienen un metodo particular llamado render()
//Un fragment se puede escribir <> </> o <Fragment> </Fragment>
let name = "Rama";

class App extends Component{
  render() {
    return (
      <div className="App"> 
        <Header />
        <SimpleMenu />
        <Section />
        <Button 
          title={"Enviar"}/>
      </div>
    );
  }
}

export default App;
