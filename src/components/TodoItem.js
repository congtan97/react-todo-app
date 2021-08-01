import React from 'react';

class TodoItem extends React.Component {
    render() {
        const { id, title, completed} = this.props.todo;
        return(
            <li className="todo-item">
                <input
                    type="checkbox" 
                    checked={completed}
                    onChange={() => this.props.handleChange(id)}
                />
                <span className={completed? "completed" : null}>
                    {title}
                </span>
                <button 
                    className="btn-style"
                    onClick={() => this.props.deleteTodo(id)}>
                        X
                </button>
            </li>
        );
    };
}

export default TodoItem;