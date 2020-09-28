import React, { Component } from 'react';

import CardList from '../card-list';

import './app.css';

export default class App extends Component {

    state = {
        data: [{
            id: 1,
            text: 'Murzik',
            src: 'https://robohash.org/murzik?set=set4&size=100x100'
        },
        {
            id: 2,
            text: 'Tom',
            src: 'https://robohash.org/tom?set=set4&size=100x100'
        },
        {
            id: 3,
            text: 'Tom',
            src: 'https://robohash.org/tom2?set=set4&size=100x100'
        },
        {
            id: 4,
            text: 'Linux',
            src: 'https://robohash.org/linux?set=set4&size=100x100'
        }
        ]
    };
    deleteItem = (id) => {
        let { data } = this.state;
        let index = data.findIndex(x => x.id === id);
        console.log(index);

        let dataBefore = data.slice(0, index);
        let dataAfter = data.slice(index + 1);

        this.setState((state) => { return { data: [...dataBefore, ...dataAfter] }; });
    }
    render() {
        return (<div className='row justify-content-around'>
            <CardList data={this.state.data} onDblDelete={(id) => this.deleteItem(id)} /> </div>)
    }
}