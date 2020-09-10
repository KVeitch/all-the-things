import React from 'react';
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import ListContainer from '../components/ListContainer/ListContainer'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>App is working</h1>
     <Header />
     <Form />
     <ListContainer />
    </div>
  );
}

export default App;
