import React from 'react';
import ReactDOM from 'react-dom';


import CardList from './components/card-list';

const App = ()=>{
  
  const data = [
    {text: 'Murzik', src: 'https://robohash.org/murzik?set=set4&size=100x100'},
    {text: 'Tom', src: 'https://robohash.org/tom?set=set4&size=100x100'},
    {text: 'Linux', src: 'https://robohash.org/linux?set=set4&size=100x100'}
  ];

  return (
    <div className='row justify-content-around'>
      <CardList data={data}/>
    </div>)
}

ReactDOM.render(<App/>, document.querySelector("#root"));
