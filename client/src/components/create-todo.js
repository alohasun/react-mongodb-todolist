import React, {Component} from 'react';

class CreateTodo extends Component {
	constructor(props) {
		super(props)
    this.state={
      inputValue:""
    }
	}
  
  render() {
    return (
      <div>
      <input 
        onChange={
          event=>{this.setState({inputValue:event.target.value})
        }}
        value={
          this.state.inputValue
        }/>
      <button 
        onClick={()=>{
          this.props.createTask(this.state.inputValue);
          this.setState({inputValue:" "});
          this.props.handleSearch('');
        }}>Create</button>
      <button 
        onClick={()=>{
          this.props.handleSearch(this.state.inputValue);
          this.setState({inputValue:" "});
        }}>Search</button>
      </div>
    );
  }

}

export default CreateTodo;