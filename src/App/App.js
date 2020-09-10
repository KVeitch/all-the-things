import React, {Component}from 'react';
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import ListContainer from '../components/ListContainer/ListContainer'
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      lists:[
        {
          title:'There is a title',
          list:["one","two"]
        }
      ]
    }
  };


  createCard=(card)=>{
    this.setState({lists:[...this.state.lists, card ]})
  }


  render(){

    return (
      <div className="full-container">
        <div className="App">
          <Header />
          <Form />
          <ListContainer lists={this.state.lists}/>
        </div>
      </div>
    );
  }
}

export default App;
