
import React, {Component} from 'react';
import TodosListHeader from './todos-list-header';
import TodosListitem from './todos-list-item';
class TodosList extends Component {
	
	renderItems(){
		//return _.map(this.props.todos,(todo,index)=><TodosListitem key={index} {...todo}/>);
		return this.props.todos.map((todo,index)=>
				<TodosListitem 
					{...todo}
					key={index}
					index={index} 
					deleteTask={this.props.deleteTask}
					searchValue={this.props.searchValue}
					handleSave={this.props.handleSave}
					taggleTask={this.props.taggleTask}
				/>
			);
	}
	
  render() {
    return (
      <table className="table">
	      <TodosListHeader 
		    sortById={this.props.sortById}
		    sortTask={this.props.sortTask}
		  />
	      	{this.renderItems()}
     </table>
    );
  }
}

export default TodosList;
