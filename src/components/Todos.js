import React from "react";
import Todo from "./Todo";
import PropTypes from 'prop-types';

class Todos extends React.Component{
    render() {
        return this.props.todos.map( todo => (
            <Todo key={todo.id} todo={todo} markToComplete={this.props.markToComplete} deleteToDo={this.props.deleteToDo}/>
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired,
};

export default Todos;


