import React, { Component } from 'react';

class Numero extends Component {
  state = {
    count: 0
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('Componente actualizado - El contador ahora es:', this.state.count);
  }

  incrementar = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  restar = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.restar}>Restar</button>
      </div>
    );
  }
}

export default Numero;