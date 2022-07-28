import React from 'react';
import './App.css';
import List from './components/List/List'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList with Typescript</h1>
      </header>
      <section>
        <div className="todoListWrapper">
          <List />
        </div>
      </section>
    </div>
  );
}

export default App;
