import React, {Component} from 'react';

class TodosListItem extends Component{
	constructor(props){
		super(props);
		this.state={
			isEditing: false,
			editValue: this.props.task,
			color: {}
		}
		this.renderActionSection = this.renderActionSection.bind(this);
		this.onEditClick = this.onEditClick.bind(this);
		this.onCancelClick = this.onCancelClick.bind(this);
		this.onEditHandle = this.onEditHandle.bind(this);
		this.onSaveClick = this.onSaveClick.bind(this);
		this.onTaskClick = this.onTaskClick.bind(this);
	}
	onEditClick(){
		this.setState({
			isEditing: true,
			editValue: this.props.task
		});
	}
	onCancelClick(){
		this.setState({
			isEditing: false,
			editValue: this.props.task
		});
	}
	onEditHandle(event){ this.setState({editValue: event.target.value});}

	onSaveClick(){
		this.props.handleSave(this.props.index,this.state.editValue)
		this.setState({isEditing: false });
	}
	onTaskClick(){
		this.props.taggleTask(this.props.index,this.props.task)	
		const {isImportant} = this.props;
		const color = isImportant ? 'Tomato':"white";
		this.setState({ color: color });
	}
	renderActionSection(){
		if(this.state.isEditing){
			return(
				<tr 
					className={this.props.task.includes(this.props.searchValue) ? "" : "hide"}>
					<td>
						{this.props.Id}
					</td>
					<td>
						<input 
							className="form-control"
							value={this.state.editValue} 
							onChange={this.onEditHandle}
						/>
					</td>
					<td>
						<button 
							className="btn btn-success" 
							onClick={this.onSaveClick} 
							style={{ marginRight: '10px' }}
						>Save
						</button> 
						<button 
							className="btn btn-warning" 
							onClick={ this.onCancelClick }
						>Cancel
						</button>
					</td>
				</tr>
				)
		}
			return (
				<tr 
					className={this.props.task.includes(this.props.searchValue) ? "" : "hide"} 
					style={{backgroundColor: this.props.isImportant ? "LightGray" : ""}}>
					<td>
						{this.props.Id}
					</td>	
					<td onClick={this.onTaskClick}>
					 	{this.props.task}
					</td>
					<td>
						<button 
							className="btn btn-primary" 
							onClick={this.onEditClick} 
							style={{marginRight: '10px'}}
						>Edit
						</button>
						<button 
							className="btn btn-danger" 
							onClick={()=>this.props.deleteTask(this.props.index)}
						>Delete
						</button>
					</td>
				</tr>
				)
	}

	render(){
		return(
			<tbody>			
				{this.renderActionSection()}
			</tbody>
			)
	}
}

export default TodosListItem;
