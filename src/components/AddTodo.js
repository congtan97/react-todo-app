import React from 'react';

export default class AddTodo extends React.Component {
    state = {
        title: ""
    };

    onInputChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
        });
    }

    render() {
        return(
            <form className="form-container" onSubmit={this.addTodo}>
                <input 
                    type="text" 
                    className="input-text" 
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onInputChange}
                />
                <input type="submit" className="input-submit" value="Add"/>
            </form>
        );
    };
}