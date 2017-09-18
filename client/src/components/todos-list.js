
import React, {Component} from 'react';
import TodosListHeader from './todos-list-header';
import TodosListitem from './todos-list-item';
class TodosList extends Component {
	
	renderItems(){
		//console.log(this.props.todos)//one false one true
		//return _.map(this.props.todos,(todo,index)=><TodosListitem key={index} {...todo}/>);
		return this.props.todos.map((todo,index)=>
			
				<TodosListitem 
					key={index} 
					task={todo.task} 
					index={index} 
					isCompeleted={todo.isCompeleted}
					deleteTask={this.props.deleteTask}
					searchValue={this.props.searchValue}
					handleSave={this.props.handleSave}
					taggleTask={this.props.taggleTask}
				/>

			);
	}
	/*function(todo,index){
		return <TodosListitem key={index} task={todo.task} isCompleted={todo.isCompleted}/>
	}*/
  render() {
  	//console.log(this.props)
    return (
    	
      
      <table>
	      <TodosListHeader/>
	      {this.renderItems()}
     </table>
    );
  }
}

export default TodosList;
