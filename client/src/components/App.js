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
    this.state={
      todos:[],
      searchValue:" "
    }

    //this.createTask=this.createTask.bind(this);
    //this.deleteTask=this.deleteTask.bind(this);
    //this.handleSearch=this.handleSearch.bind(this);
    //this.handleSave=this.handleSave.bind(this);
    //this.taggleTask=this.taggleTask.bind(this);
    //this.sortTask=this.sortTask.bind(this);
  }
  componentDidMount(){
    fetch('http://localhost:3001/todos')
      .then(res=>res.json())
      .then(todos=>this.setState({todos})); 
	 
  }

 
  /*createTask(task){
    const newTodo=this.state.todos.slice();
    newTodo.push(
      {task:task,
      isCompeleted:false}
      );
    //console.log(newTodo);
    this.setState({todos:newTodo});
  }*/
  
  /*handleSearch(searchValue){
    this.setState({
      searchValue:searchValue
    })
  }*/
  /*handleSave(index,task){
    const newTodo=this.state.todos.slice();
    newTodo[index].task = task
    this.setState({
        todos:newTodo
    })
  }*/
  /*taggleTask(index,task){
     const newTodo=this.state.todos.slice();
     newTodo[index].isCompeleted=!newTodo[index].isCompeleted;
    this.setState({
      todos:newTodo
    })
  }*/
  /*sortTask(){
    const newTodo=this.state.todos.slice(0);
    console.log(newTodo);
    newTodo.sort((a,b)=>{
      let todo1=a.task.toUpperCase();
      let todo2=b.task.toUpperCase();
      if(todo1>todo2){
        return 1;
      }else if(todo1 < todo2){
      return -1;
      } else {
        return 0
      }
    });
    this.setState({
      todos:newTodo
    })
  }*/
  /*deleteTask(index){
    const newTodo=this.state.todos.slice();
    newTodo.splice(index,1);
    this.setState({todos:newTodo});
  }*/
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React ToDo App</h2>
        </div>
        <CreateTodo 
        createTask={task=>{
          const newTodo=this.state.todos.slice();
          newTodo.push({task:task,isCompeleted:false});
          this.setState({todos:newTodo});
        }}/>
        <SearchTodo  
        handleSearch={searchValue=>{
          this.setState({searchValue:searchValue})
        }}/>
        <lable 
        onClick={()=>{
          const newTodo=this.state.todos.slice(0);
          newTodo.sort((a,b)=>{
            let todo1=a.task.toUpperCase();
            let todo2=b.task.toUpperCase();
            if(todo1>todo2){
              return 1;
            }else 
            if(todo1 < todo2){
              return -1;
            } else 
            {
              return 0
            }
          });
        this.setState({todos:newTodo})
        }}>Sort by Alphabet</lable>
        <TodosList
        todos={this.state.todos} 
        deleteTask={index=>{
          const newTodo=this.state.todos.slice();
          newTodo.splice(index,1);
          this.setState({todos:newTodo});
        }
        }
        searchValue={this.state.searchValue}
        handleSave={(index,task)=>{
          const newTodo=this.state.todos.slice();
          newTodo[index].task = task
          this.setState({todos:newTodo})
         }}
        taggleTask={(index,task)=>{
          const newTodo=this.state.todos.slice();
          newTodo[index].isCompeleted=!newTodo[index].isCompeleted;
          this.setState({todos:newTodo})
        }}/>
      </div>
    );
  }

  
}

export default App;
