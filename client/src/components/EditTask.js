import React, { Component } from 'react';
import axios from 'axios';

class EditTask extends Component {
  state = {
     title: this.props.title, 
     displayForm:false
   }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title= this.state.title;
    axios.put(`http://localhost:5000/api/tasks/${this.props.id}`, {title})
    .then(data => {
      //on cache le formulaire d'edition après enregistrement
      this.setState({displayForm:false})
      this.props.getTasks(data);
          
      })
      .catch( err => this.setState({error: "error"}) )
    }
  

  
handleChangeTitle = (event) => {  
  const {name, value} = event.target;

  this.setState({[name]: value});
 }

//afficher le formulaire d'edition
displayForm = () => {
  this.setEdit=()=>{
    let displayForm=!this.state.displayForm;
    this.setState({displayForm})
  }

  if (this.state.displayForm) {

    return <form onSubmit={this.handleFormSubmit}>
    <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
     
    <button type="submit"/>
  </form>;
    } else {
        // affichage du bouton qui affiche le formulaire d'edition
        return <div className="pen"><button onClick={this.setEdit}/></div>;
    }
  }
  render(){
    return (
      <div className="editTask">
      {this.displayForm()}
         
      </div>
    )
  }
}

export default EditTask;