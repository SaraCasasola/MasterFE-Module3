/// <reference path='./index.d.ts'/>

import React from "react";
import ReactDOM from "react-dom";
import LogoImg from "./assets/logo.png";
import "./index.scss";

ReactDOM.render(
  <div>
    <header className="imagen">
        <img src={LogoImg}/>
    </header>    
    <p className="texto">Hola mundo</p>    
  </div>,
  document.getElementById("root")
);