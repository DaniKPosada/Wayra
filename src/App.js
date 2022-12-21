//declaraciones import
//permiten a App.js utilizar código que ha sido definido en otra parte
import React from 'react';//biblioteca react
import logo from './logo.svg';
import './App.css';
//componente App pascalCase para no confundir con html 
function App(props) {
  const subject = props.subject;
  console.log(props);
  return (
    // {className viene siendo un atributo}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        ¡Hola, {subject}!
        </p>

      </header>
    </div>
  );
}
//declaración export
export default App;
