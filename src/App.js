//EN REACT DISPONEMOS DE DOS TIPOS DE COMPONENTES: 
//- FUNCIONALES 
// - TIPO CLASE: Estan definidos mediante una clase - Tienen un metodo importante llamado render - 
//               Antes podiamos guardar un state - Tienen algo llamado ciclos de vida de los componentes -
//  state y lifecycle methods no los tenian los componentes de tipo function - Antes usabamos los tipo function solo para devolver jsx
import React, { Component, Fragment } from "react";
import Header from './componentes/header/Header';
import './App.css';
import Section from "./componentes/Section/Section";
import PersonDetail from "./componentes/PersonDetail";
//Componentes de tipo Clase
//Componentes de tipo function, representacionales, dummy, stateless
//Las clases tienen un metodo particular llamado render()
//Un fragment se puede escribir <> </> o <Fragment> </Fragment>
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component{
    constructor(props){
      super(props);

    }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>React Router Dom</h1>
          <Header />
          <Switch>
            <Route path="/section" component={Section}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
