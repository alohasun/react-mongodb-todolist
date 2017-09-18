import React, {Component} from 'react';

class CreateTodo extends Component {
	constructor(props) {
		super(props)
    this.state={
      inputValue:" "
    }
		//this.handleCreate = this.handleCreate.bind(this);
    //this.handleChange=this.handleChange.bind(this);
	}
  /*handleChange(event){
    this.setState({inputValue:event.target.value})
  }*/
  /*handleCreate(){
    //console.log(this.state.inputValue);
    this.props.createTask(this.state.inputValue);
     this.setState({inputValue:" "})
  }*/
  render() {
    return (
      <div>
      <input 
      onChange={event=>{this.setState({inputValue:event.target.value})}}
      value={this.state.inputValue}
      />
      <button 
      onClick={()=>{
        this.props.createTask(this.state.inputValue);
        this.setState({inputValue:" "})
      }}>Create</button>
      </div>
    );
  }

}

export default CreateTodo;