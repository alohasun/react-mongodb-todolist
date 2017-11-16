import React, {Component} from 'react';

class TodosListItem extends Component{
	constructor(props){
		super(props);
		this.state={
			isEditing:false,
			editValue:this.props.task
		}
		this.renderActionSection=this.renderActionSection.bind(this);
		this.onEditClick=this.onEditClick.bind(this);
		this.onCancelClick=this.onCancelClick.bind(this);
		this.onEditHandle=this.onEditHandle.bind(this);
		this.onSaveClick=this.onSaveClick.bind(this);
		this.renderTaskSection=this.renderTaskSection.bind(this);
		this.onTaskClick=this.onTaskClick.bind(this);
	}
	onEditClick(){
		this.setState({
			isEditing:true,
			editValue:this.props.task
		});
	}
	onCancelClick(){
		this.setState({
			isEditing:false,
			editValue:this.props.task
		});
	}
	onEditHandle(event){
		this.setState({editValue:event.target.value})
	}
	onSaveClick(){
		this.props.handleSave(this.props.index,this.state.editValue)
		this.setState({
			isEditing:false});
	}
	onTaskClick(){
		this.props.taggleTask(this.props.index,this.props.task)	
	}
	renderTaskSection(){
		const {task,isCompeleted}=this.props;
		//console.log(this.props.task)
		const color = isCompeleted?'green':"red";
		const taskStyle={color:color,
						 cursor:'pointer'
						}
		return(
			<td style={taskStyle} onClick={this.onTaskClick}>
			{this.props.task}
			</td>
			);
	}
	renderActionSection(){
		if(this.state.isEditing){
			return(
				<tr className={this.props.task.includes(this.props.searchValue)? "" : "hide"}>
					<td>
						<input value={this.state.editValue} onChange={this.onEditHandle}/>
					</td>
					<td>
						<button onClick={this.onSaveClick}>Save</button>
						<button onClick={this.onCancelClick}> Cancel</button>
					</td>
				</tr>
				)
		}
			return (
				<tr className={this.props.task.includes(this.props.searchValue)? "" : "hide"}>
						
						{this.renderTaskSection()}
					
					<td>
						<button onClick={this.onEditClick}> Edit</button>
						<button onClick={()=>this.props.deleteTask(this.props.index)}> Delete</button>
					</td>
				</tr>
				)
	}
	render(){
		//console.log(this.props.searchValue);
		return(
			<tbody>			
				{this.renderActionSection()}
			</tbody>
			)
	}
}

export default TodosListItem;
