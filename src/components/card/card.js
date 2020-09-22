import React from 'react'

import Header from '../header/header'
import Footer from '../footer'
import Main from '../main/main'

import './card.css'

const Card = ({info})=>{
return (
    <div className='card p-4 custom-card col-10 col-sm-6 col-md-4 col-lg-3'>
       <Header text={info.text} italic  />
       <Main src={info.src} />
       <Footer networks={info.networks}/>
    </div>
  );
}

export default Card;