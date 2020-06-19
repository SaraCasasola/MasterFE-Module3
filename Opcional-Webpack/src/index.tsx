/// <reference path='./index.d.ts'/>

import React from "react";
import ReactDOM from "react-dom";
import LogoImg from "./assets/logo.png";

ReactDOM.render(
  <div>
    <header className="imagen">
        <img src={LogoImg}/>
    </header>    
    <p className="texto">Hola mundo</p>
    <p className="entorno">Estamos en el entorno de {process.env.ENVIRONMENT}</p>
  </div>,
  document.getElementById("root")
);