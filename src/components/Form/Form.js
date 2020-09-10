import React, { Component } from "react";
import "./Form.css";
import FormListItem from "../FormListItem/FormListItem";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      taskText: "",
      tasks: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTitleEnter = (event) => {
    if (event.keyCode === 13) {
      this.listInput.focus();
    }
  };

  handleTaskEnter = (event) => {
    if (event.keyCode === 13) {
      this.setState({
        tasks: [...this.state.tasks, event.target.value],
        taskText: "",
      });
      this.listInput.focus();
    }
  };

  handleSubmit = ()=>{
    const{title,tasks} =this.state
    const card = {
      title,
      tasks
    }  
    this.props.createCard(card)
    this.setState({
      tasks: [],
      taskText: "",
      title:""
    })
    this.titleInput.focus();
  }

  render() {
    const { tasks, taskText, title } = this.state;

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
          ref={(ip) => (this.titleInput = ip)}
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
          ref={(ip) => (this.listInput = ip)}
          onChange={this.handleChange}
          onKeyDown={this.handleTaskEnter}
        />
        <button type="button" onClick={this.handleSubmit} >Make the thing</button>
      </div>
    );
  }
}

export default Form;
