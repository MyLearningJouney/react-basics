import React, { useState } from 'react';
import './App.css';
import List from './components/List/List'
import InputForm from './components/Form/InputForm'
import { v4 as uuidv4 } from 'uuid'; 


function App() {
  const [activity, setActivity] = useState([{
    activity: 'Aprender Javascript',
    createdDate: new Date(Date.now()),
    completedDate: null,
    completed: false,
    id: uuidv4()
  }]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList with Typescript</h1>
      </header>
      <section>
        <div className="todoListWrapper">
          <List activity={activity}/>
        </div>
        <div className="inputFormWrapper">
          <InputForm />
        </div>
      </section>
    </div>
  );
}

export default App;
