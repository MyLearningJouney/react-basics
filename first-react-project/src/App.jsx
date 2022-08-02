import React, { Component } from 'react';
import './App.css';

  const title = 'To-do list with React'
  const username = 'Danilo'
  const todolist = 
  [
    {
      objectID: 1,
      activity: 'Aprender React',
      date:'26/07/2022',
      createdDate:'25/07/2022',
    },
    {
      objectID: 2,
      activity: 'Aprender Javascript',
      date:'26/07/2022',
      createdDate:'26/07/2022',
    }
  ]

  const isSearched = searchTerm => item => 
    item.activity.toLowerCase().includes(searchTerm.toLowerCase());

  const newActivity = {
      objectID: 3,
      activity: 'Aprender Java',
      date:'23/07/2022',
      createdDate:'19/07/2022',
  }
  

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      todolist,
      username,
      searchTerm: '',
    }

    this.onDismiss = this.onDismiss.bind(this)
    this.showCreatedDate = this.showCreatedDate.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this);
    this.addActivity = this.addActivity.bind(this)

  }

  showCreatedDate(id){ 
    this.state.todolist.forEach( item => {
      if(item.objectID === id){
        item.date = 'Created at ' + item.createdDate
        this.setState({todolist})
        console.log(item.date)
      }
    })
  }

  onDismiss(id){
    const isNotId = item => item.objectID !== id
    const updatedList = this.state.todolist.filter(isNotId)
    this.setState({todolist:updatedList})
  }

  onSearchChange(event){
    this.setState({searchTerm: event.target.value})
  }

  addActivity(item){
    this.state.todolist.push(item)
    //console.log(this.state.todolist)
    this.setState({todolist})
  }


  render(){
    return (
      <div className="App">
        <h2>{this.state.username}'s {title}</h2>
        <form>
          <input 
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        <div>
          <span>Procurando por {this.state.searchTerm}</span>
        </div>
        <div>
          <span>Tamanho da lista: {this.state.todolist.length}</span>
        </div>
        <ul>
          {this.state.todolist.filter(isSearched(this.state.searchTerm)).map( item =>  
            <li key={item.objectID}>
              <div>
                <span>{item.activity}</span>
                <span>{item.date}</span>
              </div>
              <div>
                <button
                  onClick = {() => this.onDismiss(item.objectID)}
                  type = "button"
                >
                  Dismiss
                </button>
              </div>
              <div>
                <button
                  onClick = {() => this.showCreatedDate(item.objectID)}
                  type = "button"
                >
                  ShowCreatedDate
                </button>
              </div>
            </li>
            )}
        </ul>
        <button
          onClick = {() => this.addActivity(newActivity)}
          type = "button"
          >
          addActivity
          </button>
      </div>
    );
  }
}

export default App;