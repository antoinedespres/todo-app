import React from 'react';
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import List from "./components/List.js";
import './App.css';

function App() {
  return (
      <React.Fragment>
        <Header title='To-Do list'/>
        <Form />
        <List />
      </React.Fragment>
  );
}

export default App;
