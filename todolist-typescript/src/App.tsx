import React, { useState } from 'react';
import './App.css';
import List from './components/List/List'
import Form from './components/Form/Form'
import { ActivityItem } from './types/ActivityItem';


function App() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList with Typescript</h1>
      </header>
      <section>
        <div className="todoListWrapper">
          <List activities={activities}/>
        </div>
        <div className="inputFormWrapper">
          <Form setActivities={setActivities}/>
        </div>
      </section>
    </div>
  );
}

export default App;
