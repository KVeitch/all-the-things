import React, {Component} from 'react'
import './Form.css'
import FormListItem from '../FormListItem/FormListItem'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      taskText:'',
      tasks: ["bob", "susas"],
    };
    // this.focus = this.focus.bind(this)
  }

  handleChange = (event) => {
    console.log(event.target)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTitleEnter = (event) => {
    if (event.keyCode === 13) {
      this.myInp.focus()
    }
  };

  handleTaskEnter = (event) =>{
    if (event.keyCode === 13) {
      this.setState({
        tasks:[...this.state.tasks, event.target.value],
        taskText:''
      })
      this.myInp.focus()
    } 
  }

  render() {
    const { tasks, taskText,  title } = this.state;
    
    const formItems = tasks.map((text, i) => (
      <FormListItem text={text} key={`formItem${i}`} />
    ));

    return (
      <div className="form">
        <p>Task Title</p>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          autoFocus={true}
          onChange={this.handleChange}
          onKeyDown={this.handleTitleEnter}
        />
        <p>Task Items</p>
        <ul className="list__container">{formItems}</ul>
        <input 
          type="text"
          placeholder="Task Item"
          name="taskText"
          value={taskText}
          ref={(ip) => this.myInp = ip}
          onChange={this.handleChange}
          onKeyDown={this.handleTaskEnter}
        />
        <button type="button">Make the thing</button>
      </div>
    );
  }
}

export default Form
