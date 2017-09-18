import React, {Component} from 'react';

class SearchTodo extends Component {
	constructor(props) {
		super(props);
		
    this.handleChange=this.handleChange.bind(this);

	}
  handleChange(event){
    this.props.handleSearch(event.target.value)
  }
  
  
  render() {
    return (
      <div>
      <input onChange={this.handleChange} value={this.props.searchValue}/>
      <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }

}

export default SearchTodo;