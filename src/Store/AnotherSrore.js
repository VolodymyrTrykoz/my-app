import { observable, action, computed } from "mobx";

class AnotherStore {
    @observable todos = ['get study permit', 'get ITA']

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

const anotherStore = new AnotherStore();

export default anotherStore;

