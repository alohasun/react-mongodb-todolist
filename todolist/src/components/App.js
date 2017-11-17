import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import '../App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      searchValue: ""
    }
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.sortTask = this.sortTask.bind(this);
    this.taggleTask = this.taggleTask.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.sortById = this.sortById.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentDidMount(){
    fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then(todos => this.setState({todos})); 
  }

  createTask(task){
    const newTasks = [...this.state.todos];
    newTasks.push({
      task: task,
      isImportant: false,
      Id: this.state.todos.length+1
    });
    this.setState({ todos: newTasks });
  }
  deleteTask(index){
    const newTasks = [...this.state.todos];
    newTasks.splice(index,1);
    this.setState({ todos:newTasks });
  }
  sortTask(){
    const newTasks = [...this.state.todos];
    newTasks.sort((a, b) =>{return a.task.toUpperCase() > b.task.toUpperCase() ? 1 : -1});
    this.setState({ todos: newTasks });
  }

  taggleTask(index,task){
     const newTasks = [...this.state.todos];
     newTasks[index].isImportant =! newTasks[index].isImportant;
    this.setState({ todos: newTasks });
  }
  handleSearch(searchValue){
    this.setState({ searchValue:searchValue });
  }
  sortById(){
    const newTasks = [...this.state.todos];
    newTasks.sort((a, b) => a.Id - b.Id);
    this.setState({ todos: newTasks });
  }
  handleSave(index,task){
    const newTodo = [...this.state.todos];
    newTodo[index].task = task;
    this.setState({ todos:newTodo });
  }

  render() {
    return (
      <div className="App">
        <CreateTodo 
          createTask={this.createTask}
          handleSearch={this.handleSearch}/>
        <TodosList
          sortById={this.sortById}
          sortTask={this.sortTask}
          todos={this.state.todos} 
          deleteTask={this.deleteTask}
          searchValue={this.state.searchValue}
          handleSave={this.handleSave}
          taggleTask={this.taggleTask}
        />
      </div>
    );
  }
}
export default App;
