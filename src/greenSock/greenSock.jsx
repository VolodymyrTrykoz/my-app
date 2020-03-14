import React, {Component} from 'react';
import { TweenMax } from 'gsap';


export default class Gsap extends Component {
    constructor(){
        super();
        this.state = {
            square: false,
            square1: false,
        }
    }
    useTransformation = (el, name, size) =>{
        TweenMax.to(el, .5, {width:size, height:size});
        this.setState({
            [name]: !this.state[name]
        })
    };

    render(){
        const { square, square1 } = this.state;
        return (
            <>
                <div className="square"
                    ref={ el => this.square = el }
                    onClick={ () => {
                        square ? this.useTransformation(this.square, 'square', '100px',) : this.useTransformation(this.square, 'square', '200px')
                    }}
                ></div>

                <div className="square"
                     ref={ el => this.square1 = el }
                     onClick={ () => {
                         square1 ? this.useTransformation(this.square1, 'square1', '100px',) : this.useTransformation(this.square1, 'square1', '200px')
                     }}
                ></div>
            </>
        )
    }
}