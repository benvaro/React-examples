import React from 'react';

import Card from '../card'

const CardList = ({data})=>{

    const cards = data.map(item => {
        
        return <Card info={item} />;
    })
    
    return ( 
    <>
        {cards}
    </>    
    );
}

export default CardList;