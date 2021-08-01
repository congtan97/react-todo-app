import React from 'react';
import Header from './layout/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Footer from '../store/containers/Footer';
import axios from 'axios';

class TodoApp extends React.Component {
    state = {
        todos: []
    };

    handleCheckboxChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) todo.completed = !todo.completed;
                return todo;
            })
        });
    };

    deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => this.setState({
                    todos: [
                        ...this.state.todos.filter(todo => {
                            return todo.id !== id;
                        })
                    ]
                })
            );
    };

    addTodo = (title) => {
        const todoData = {
            title: title,
            completed: false
        };

        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
            .then(response => {
                console.log(response.data);
                this.setState({
                    todos: [...this.state.todos, response.data]
                });
            });
    };

    componentDidMount() {
        const config = {
            params: {
                _limit: 7
            }
        };
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => this.setState({todos: response.data}));
    }

    render() {
        return(
            <div className="container">
                <Header />
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                    todos={this.state.todos} 
                    handleChange={this.handleCheckboxChange}
                    deleteTodo={this.deleteTodo}
                />
                <Footer />
            </div>
        );
    };
}

export default TodoApp;