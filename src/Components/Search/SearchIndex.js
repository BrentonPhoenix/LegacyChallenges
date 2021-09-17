import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(){
    super() 
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     input: ""
   }
  }
  searchFunction() {
    return(
      <div>
        { this.state.things.includes(this.state.input) ? <p>{this.state.input}</p> : null }
        { this.state.input === "" ? this.state.things.map((current) => <p>{current}</p>): null}
      </div>
    )
  }
  // componentDidMount(){
  //   console.log(this.state.things.includes(this.state.input))
  // }
  
  updateInput(event){
    this.setState({
      input: event.target.value
    })
  }
  
  render() {
    return(
    <div>
       <Input value={this.state.input} onChange={event => this.updateInput(event)} type="text" placeholder='Search Here' />
       <h3>Results:</h3>
      {
        this.searchFunction()
      }
     </div>
    )
 }
}

 
export default SearchIndex;
