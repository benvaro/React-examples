import React from 'react'

import './header.css'
// деструктуризація об'єкта
const Header = ({ text, italic, onDblDelete }) => {

  const boldText = <b>some text</b>
  const italicText = <i>some italic text</i>

  let flag = true;

  const style = {
    color: flag ? 'green' : 'tomato',
    fontStyle: italic ? 'italic' : 'normal'
  };

  return (
    <header style={style}>
      <h1>{text}</h1>
      <a className="btn btn-info" onClick={onDblDelete}>
        <i className="fa fa-trash"></i>
      </a>
    </header>
  );
};

export default Header;