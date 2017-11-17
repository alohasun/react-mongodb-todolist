import React, {Component} from 'react';


class TodosListHeader extends Component {
  render() {
    return (
      <thead>
      	<tr>
          <th>Id&nbsp;&nbsp;
            <span  
              className="glyphicon glyphicon-sort-by-order"
              onClick={()=>this.props.sortById()}
            >
            </span>
          </th>
      		<th scope="col">Task&nbsp;&nbsp; 
            <span  
              className="glyphicon glyphicon-sort-by-alphabet"
              onClick={()=>this.props.sortTask()}
            >
            </span>
          </th>
      		<th scope="col">Actions</th>
      	</tr>
      </thead>
    );
  }
}

export default TodosListHeader;
