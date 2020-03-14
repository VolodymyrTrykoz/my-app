import React, { Component } from "react";
import store from '../Store/Store'

export default class Template extends Component {
    
    render(){
        const { label, image } = this.props;
        return(
            <>
                <h1>{ label }</h1>
                <h2>{ store.todos[0] }</h2>
                <img src={ image } alt=""/>
            </>
        )
    }
}