import { observable, action, computed } from "mobx";

class Store {
    @observable todos = ['get milk', 'buy 2 eggs']

    @action addTodo = (item) => {
        this.todos.push(item)
    }

    @action removeTodo = (item) => {
        this.todos = this.todos.filter(el => el !== item)
    }

    @computed get todoLength(){
      return this.todos.length
    }
}

const store = new Store();

export default store;

