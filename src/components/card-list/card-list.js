import React, { Component } from 'react';

import Card from '../card'

export default class CardList extends Component {

    render() {
        const { data, onDblDelete } = this.props;
        const cards = data.map(item => {

            return <Card key={item.id} info={item} onDblDelete={(id) => onDblDelete(item.id)} />;
        })

        return (
            <>
                {cards}
            </>
        );
    }
}
