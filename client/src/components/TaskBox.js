import React, {Component} from 'react';
import axios from 'axios';
import EditTask from './EditTask.js'

class TaskBox extends Component {
    state = {
      doneyet:this.props.doneyet,
    }
   
    //enregistre si la tache est done 
    handleChecked = () => {
        const doneyet=!this.state.doneyet;
        axios.put(`http://localhost:5000/api/tasks/${this.props.id}`, {doneyet})
        .then( () => {
            this.props.getTasks();
            this.setState({doneyet});
         })
        .catch( error => console.log(error) )
    }

    //supprime une tache
    deleteTask = () => {
        axios.delete(`http://localhost:5000/api/tasks/${this.props.id}`)
        .then( () => {
            this.props.getTasks();
         })
        .catch( error => console.log(error) )
    }

    render () {
        return (
            <div className="taskBox">
                <div className="checkboxLabel">
                    <input className="checkbox" type="checkbox" checked={this.state.doneyet} onChange={() => this.handleChecked()}/>
                    <label>{this.props.title}</label>
                </div>
                        
                <div className="taskEdit">
                    <EditTask title={this.props.title} id={this.props.id} getTasks={this.props.getTasks}/>
                </div>
                <div className="trash">
                    <button onClick={() => {if (window.confirm('es-tu sûr de vouloir supprimer cette tâche?')) this.deleteTask()}}/>
                </div>
            </div>
        )
    }
}

export default TaskBox;