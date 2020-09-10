import React, {Component}from 'react';
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import ListContainer from '../components/ListContainer/ListContainer'
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      lists:[]
    }
  };
  render(){

    return (
      <div className="full-container">
        <div className="App">
          <Header />
          <Form />
          <ListContainer list={this.state.lists}/>
        </div>
      </div>
    );
  }
}

export default App;
