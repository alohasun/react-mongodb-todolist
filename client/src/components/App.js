import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import SearchTodo from './search-todo';

import logo from '../logo.svg';
import '../App.css';

/*const todos=[
{
  task:'make React tutorial',
  isCompeleted:false
}
];*/
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      searchValue: " "
    }
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.sortTask = this.sortTask.bind(this);
    this.taggleTask = this.taggleTask.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
    //this.handleSave=this.handleSave.bind(this);
    
  }
  componentDidMount(){
    fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then(todos => this.setState({todos})); 
  }

  createTask(task){
    const newTasks = this.state.todos.slice();
    newTasks.push({
      task: task,
      isCompeleted: false
    });
    this.setState({
      todos: newTasks
    });
  }
  deleteTask(index){
    const newTasks = this.state.todos.slice();
    newTasks.splice(index,1);
    this.setState({
      todos:newTasks
    });
  }
  sortTask(){
    const newTasks = this.state.todos.slice();
    //console.log(newTasks);
    newTasks.sort((a,b) => {
      let task1 = a.task.toUpperCase();
      let task2 = b.task.toUpperCase();
      if(task1 > task2){
        return 1;
      }else if(task1 < task2){
      return -1;
      } else {
        return 0
      }
    });
    this.setState({
      todos: newTasks
    })
  }

  taggleTask(index,task){
     const newTasks = this.state.todos.slice();
     newTasks[index].isCompeleted =! newTasks[index].isCompeleted;
    this.setState({
      todos: newTasks
    })
  }
  handleSearch(searchValue){
    this.setState({
      searchValue:searchValue
    })
    //console.log(searchValue);
  }
  /*handleSave(index,task){
    const newTodo=this.state.todos.slice();
    newTodo[index].task = task
    this.setState({
        todos:newTodo
    })
  }*/
  
  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React ToDo App</h2>
        </div>
        <CreateTodo 
          createTask={this.createTask}
          handleSearch={this.handleSearch}/>
        <button 
          onClick={()=>this.sortTask()}>Sort by Alphabet</button>
        <TodosList
          todos={this.state.todos} 
          deleteTask={this.deleteTask}
          searchValue={this.state.searchValue}
          handleSave={(index,task)=>{
            const newTodo=this.state.todos.slice();
            newTodo[index].task = task
            this.setState({todos:newTodo})
           }}
          taggleTask={(index,task)=>this.taggleTask(index,task)}/>
      </div>
    );
  }

  
}

export default App;
