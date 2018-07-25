import React, {Component} from 'react';
import './App.css';
import AddItemContainer from './container/AddItemContainer';
import TodoListContainer from './container/TodoListContainer';
import FilterListContainer from './container/FilterListContainer';
import {BrowserRouter, Route, Link} from "react-router-dom"
import TodoList from "./component/TodoList";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div>
                        <h2>Jquery To Do List</h2>
                        <p>
                            <em>Simple Todo List with adding and filter by diff status.</em>
                        </p>
                    </div>
                    <Route exact path = "/" component = {TodoList}></Route>
                    <Route path="/:status" component={TodoList}></Route>
                    <AddItemContainer/>
                    <TodoListContainer/>
                    <FilterListContainer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
