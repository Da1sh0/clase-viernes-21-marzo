import React, { Component } from 'react';

class Redimecionar extends Component {
  state = {
    windowWidth: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const { windowWidth } = this.state;
    return (
      <div>
        <p>La ventana tiene un ancho de: {windowWidth}px</p>
      </div>
    );
  }
}

export default Redimecionar;
