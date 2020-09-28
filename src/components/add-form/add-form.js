import React, { Component } from 'react';

import './add-form.css';

export default class AddForm extends Component {

    state = {
        text: ''
    }

    onAdd = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({ text: '' })
    }

    onTextChange = (e) => {
        console.log(e.target.value)
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <>
                <form>
                    <input onChange={this.onTextChange}
                        value={this.state.text}
                        className="form-control" placeholder="Enter cat name" />
                    <button className="btn btn-primary" onClick={this.onAdd} >Add</button>
                </form>
            </>)
    }
}

