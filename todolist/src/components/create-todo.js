import React, {Component} from 'react';

class CreateTodo extends Component {
	constructor(props) {
		super(props);
    this.state={
      inputValue:"",
      searchValue:""
    };
	}
  
  render() {
    return (
      <div className='App-header'>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <input 
                type="text"
                className="form-control"
                placeholder="Create new task..."
                onChange={event=>{this.setState({inputValue:event.target.value})}}
                value={this.state.inputValue}
              />
              <span className="input-group-btn">
              <button 
                className="btn btn-secondary"
                type="button"
                onClick={()=>{
                  this.props.createTask(this.state.inputValue);
                  this.setState({inputValue:""});
                  this.props.handleSearch("");
                }}
              >Create</button>
              </span>
             </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="input-group">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                  onChange={event=>{this.setState({searchValue:event.target.value});}}
                  value={this.state.searchValue}
                />
                <span className="input-group-btn">
                  <button 
                    className="btn btn-secondary"
                    onClick={()=>{
                      this.props.handleSearch(this.state.searchValue);
                      this.setState({searchValue:""});
                    }}
                  >Search</button>
                </span>
              </div>
            </div> 
        </div>
      </div>
    );
  }
}

export default CreateTodo;