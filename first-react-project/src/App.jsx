import React, { Component } from 'react';
import './App.css';

  const title = 'To-do list with React'
  const username = 'Danilo'
  const todolist = [
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

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      todolist,
      username,
    }

    this.onDismiss = this.onDismiss.bind(this)

  }

  onDismiss(id){
    const isNotId = item => item.objectID !== id
    const updatedList = this.state.todolist.filter(isNotId)
    this.setState({todolist:updatedList})
  }


  render(){
    return (
      <div className="App">
        <h2>{this.state.username}'s {title}</h2>
        <ul>
          {this.state.todolist.map( item =>  
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
            </li>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
