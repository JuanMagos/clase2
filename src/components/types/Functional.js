import React from 'react';
import logo from '../../logo.svg';

const FunctionalComponent = ({ nombre, apellido, children }) => {
  return (
    <div>
      <h3>Functional Component</h3>
      <h2>{nombre} </h2>
      <h2>{apellido}</h2>
      {children}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
};

export default FunctionalComponent;
