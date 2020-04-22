import React, { Component } from 'react';
import axios from 'axios';

//ajouter une tache
class AddTask extends Component {
 state = { title: ""};
  
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    axios.post("http://localhost:5000/api/tasks", {title})
    .then( () => {
        this.props.getTasks();
        this.setState({title: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="addTask">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" placeholder="Ajouter une tâche" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <button id="saveTask" type="submit"/>
        </form>
      </div>
    )
  }
}

export default AddTask;