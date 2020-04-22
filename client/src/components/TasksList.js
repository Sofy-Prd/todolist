import React, { Component } from 'react';
import axios from 'axios';
import TaskBox from './TaskBox.js'
import AddTask from './AddTask.js';


class TasksList extends Component {
 state = {  listOfTasks: [],
            query:'',
          };
  
  // recuperation des tâches enregistrées
  getAllTasks = () =>{
    axios.get(`http://localhost:5000/api/tasks`)
    .then(responseFromApi => {
      this.setState({
        listOfTasks: responseFromApi.data
      })
    
    })
  }

  componentDidMount() {
    this.getAllTasks();
  }

  //recupère la query dans la searchbar et met à jour le state
  handleQuery = (ev) => {
    this.setState({
      query: ev.target.value
    })
  }
   
  render(){
    let tasks = this.state.listOfTasks;
    const query = this.state.query;
    if (query) {
      tasks = tasks.filter(task => task.title.includes(query))
    }
    
    return(
      <div>
        <div className="title">
          <img src="/images/list.svg" alt="todoList"/>
          <h1>Ma Todo List</h1>
        </div>
        <div>
          <AddTask getTasks={() => this.getAllTasks()}/>
        </div>
       
        <div className="tasksList">
          { tasks.map( task => {
            return (
              <div key={task._id}>
                <TaskBox title={task.title} doneyet={task.doneyet} id={task._id} getTasks={() => this.getAllTasks()}/>
              </div>
            )})
          }
        </div>
        <div className="searchBar"> 
          <input type="search" placeholder="Rechercher une tâche ..." value={this.state.query} onChange={this.handleQuery} />
        </div>
       
      
      </div>
    )
  }
}

export default TasksList;