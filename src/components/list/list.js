import React from 'react';

import './list.css'

const List = (props) => {
    let networks = ['FB', 'instagram'];

    const style = {
        color: props.color
    }
    console.log(props);
    return (
        <ul className='list-group list-group-horizontal'>
            <li className='list-group-item'>
                <i className='fab fa-facebook' style={style}></i>
                {networks[0]}
            </li>
            <li className='list-group-item' style={style}>
                <i className='fab fa-instagram' ></i>{networks[1]}</li>
        </ul>);
}

export default List;