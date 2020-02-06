import React from "react";
import PropTypes from "prop-types";
import Todos from "./Todos";

class AddTodo extends React.Component{
    state = {
        title:'',
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    };
    setTitle = (e) => this.setState({title: e.target.value});
    render(){
        return(
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add to do" style={{flex:'10'}} value={this.state.title}
                onChange={this.setTitle} />
                <input type="submit" value="Add" className='btn' style={{flex: '1'}} />
            </form>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default AddTodo;
