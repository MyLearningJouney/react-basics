import React from 'react';
import './App.css';
import List from './components/List/List'
import InputForm from './components/Form/InputForm'


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
        <div className="inputFormWrapper">
          <InputForm />
        </div>
      </section>
    </div>
  );
}

export default App;
