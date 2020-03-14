import React, { Component } from "react";
import Template from "./template";
import axios from 'axios';

export default class Receipt extends Component{
    constructor(){
        super();
        this.state = {
            recipes: ''
        }
    }

    fetchReceiptsData = () => {
        const APP_ID = 'dc635d0d';
        const APP_KEY = '70e26f1087a923d3893b2e9d84edb4dd';
        const { ingredient } = this.state;
        const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        axios.get(url)
            .then(res => {
                const recipes = res.data.hits;
                this.setState({ recipes });
            })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.fetchReceiptsData();
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {

        const { recipes } = this.state;
        return (
            <>
                <form onSubmit={ this.onSubmit }>
                    <input onChange={ this.handleChange } name="ingredient" type="text"/>
                    <button type="submit">Submit</button>
                </form>
                { !!recipes.length
                    &&
                    recipes.map((item, index) => (
                        <Template
                            key={ index }
                            label = { item.recipe.label }
                            image = { item.recipe.image }
                        />
                    ))
                }
            </>
        )
    }
}