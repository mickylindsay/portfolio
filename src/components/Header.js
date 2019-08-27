import React from 'react';
import './Header.css';

const Header = props => {
  const sliderClass = (phase) => { return `slider ${phase ? 'slider-active' : 'slider-inactive'}` }

  return (
    <div className="Header">
      <div className="header-body">
          <h1 id="title">{props.phase ? "Micky Lindsay" : "demiSardonic"}</h1>
          <h3 id="title">One part portfolio website, two parts personal website</h3>
      </div>
      <div className="slider" onClick={props.flip}>
        <div id="slider-left" className={sliderClass(props.phase)}><h2>Professonal Programmer and Amateur Public Speaker</h2></div>
        <div id="slider-right" className={sliderClass(!props.phase)}><h2>Amateur Falconeer and Professonal Liar</h2></div>
      </div>
    </div>
  )
}

export default Header
