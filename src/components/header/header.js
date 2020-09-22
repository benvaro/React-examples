import React from 'react'

// деструктуризація об'єкта
const Header = ({text, italic}) => {

  const boldText = <b>some text</b>
  const italicText = <i>some italic text</i>

  let flag = true;

    const style = {
      color: flag ? 'green': 'tomato',
      fontStyle: italic? 'italic': 'normal'
    };

    return (
       <header style={style}>
           {/* {flag ? boldText : italicText} */}
          <h1>{text}</h1>

          {/* <h2>Random: {Math.random().toFixed(2)}</h2> */}

      </header>
      );
  };

  export default Header;