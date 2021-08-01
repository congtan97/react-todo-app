import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    render() {
        return(
            <ul>
                {this.props.todos.map(todo =>(
                    <TodoItem 
                        key={todo.id} todo={todo} 
                        handleChange={this.props.handleChange}
                        deleteTodo={this.props.deleteTodo}
                    />
                ))}
            </ul>
        );
    };
}

export default Todos;