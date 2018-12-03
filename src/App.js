import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: []
  };

  consultarApi = () => {
    const url = `https://pixabay.com/api/videos/?key=10885245-c6440a9fde04a4b323cd16c61=${
      this.state.termino
    }`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = termino => {
    this.setState(
      {
        termino
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <Resultado imagenes={this.state.imagenes} />
        {this.state.termino}
      </div>
    );
  }
}

export default App;
