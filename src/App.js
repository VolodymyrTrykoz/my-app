import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import FormikApp from './formik/form'
import Gsap from './greenSock/greenSock'
import Todo from "./todo/todo";

@inject('store')
@observer
class App extends Component{
    render(){
        const { store } = this.props;
        return(
            <>
                <h4>Add new action</h4>
                <input type="text" onKeyPress={ event => {
                    if(event.which === 13){
                        store.addTodo( event.target.value );
                        event.target.value = '';
                    }
                }}/>
                {
                    store.todos.map((item, index) => {
                        return(
                            <div key={ index }>
                                <li>
                                    { item }
                                </li>
                                <button onClick={()=>store.removeTodo(item)}>Remove</button>
                            </div>
                        )
                    })
                }
                { store.todoLength }
                <FormikApp />
                <Gsap />
                <Todo />
            </>
        )
    }
}

export default App
 