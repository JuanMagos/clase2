import React, { Component } from 'react';
import logo from '../../logo.svg';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <h2>
          {this.props.nombre} {this.props.apellido}
          {this.props.edad}
        </h2>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default ClassComponent;
