import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from "./components/Todos";
import Header from "./components/Display/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state = {
        todos: []
    };
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
            .then(res => this.setState({todos: res.data}));
    }

    markToComplete = (id) => {
        this.setState( { todos: this.state.todos.map( todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
            })});
    };

    deleteToDo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    };

    addTodo = (title) => {
        console.log(title);
        axios.post('https://jsonplaceholder.typicode.com/todos',{
            title,
            completed: false,
        }).then(res => this.setState({todos: [...this.state.todos, res.data]}));
    };
    render(){
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} markToComplete={this.markToComplete} deleteToDo={this.deleteToDo}/>
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About} />

                </div>
            </Router>

        );
    };

}

export default App;
