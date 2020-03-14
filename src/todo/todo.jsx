import React, { Component } from "react";
import { inject, observer } from 'mobx-react'

@inject('anotherStore')
@observer
class Todo extends Component{
    render(){
        const { anotherStore } = this.props;
        return(
            <>
                <h4>Add new action</h4>
                {
                    anotherStore.todos.map((item, index) => {
                        return(
                            <div key={ index }>
                                <li>
                                    { item }
                                </li>
                                <button onClick={()=>anotherStore.removeTodo(item)}>Remove</button>
                            </div>
                        )
                    })
                }
                { anotherStore.todoLength }
            </>
        )
    }
}

export default Todo