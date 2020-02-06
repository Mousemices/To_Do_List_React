import React from "react";
import PropTypes from 'prop-types';

class Todo extends React.Component{
    getStyle = () => {
       return {
           display:'flex',
           justifyContent:'space-between',
           backgroundColor: '#00b894',
           padding: '0.5rem',
           borderBottom: '1px dotted #bdc3c7',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none'
       }
    };

    render() {
        // Destructuring
        const { id, title } = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markToComplete.bind(this, id)} />
                <h3>{ title }</h3>
                <button onClick={this.props.deleteToDo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        );
    }
}

Todo.ProTypes = {
    todo: PropTypes.object.isRequired,
};
const btnStyle = {
    background:'#e74c3c',
    border:'none',
    padding:'1rem 2rem',
    textDecoration: 'none',
};
export default Todo;
