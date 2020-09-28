import React, { Component } from 'react'

import Header from '../header/header'
import Footer from '../footer'
import Main from '../main/main'

import './card.css'

export default class Card extends Component {
  state = {
    selected: false,

  }

  onClickEvent = () => {
    //x   console.log(this);
    // state - незмінний, змінювати напряму неможна
    // але можливо через setState
    this.setState((state) => {
      return { selected: !this.state.selected };
    });
  }



  render() {
    // ES6
    // Деструктуризація
    // props {
    //     info: "Text",
    // networks: {
    // id: 1,
    // name: "fa"
    //}
    //}
    const { info, onDblDelete } = this.props;
    let className = 'card p-4 custom-card col-10 col-sm-6 col-md-4 col-lg-3';
    if (this.state.selected) {
      className += ' selected';
    }
    return (
      <div onClick={this.onClickEvent}
        onDoubleClick={onDblDelete}
        className={className} >
        <Header text={info.text} italic />
        <Main src={info.src} />
        <Footer networks={info.networks} />
      </div>
    );
  }
}
