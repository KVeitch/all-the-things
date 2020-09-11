import React, { Component } from "react";
import "./Form.css";
import FormListItem from "../FormListItem/FormListItem";
import plusIcon from "../../images/plus.svg";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      taskText: "",
      tasks: [],
      isTip1Visible:true,
      isTip2Visible:true,
      isTip3Visible:true,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTitleEnter = (event) => {
    if (event.keyCode === 13) {
      this.setState({isTip1Visible:false})
      this.listInput.focus();
    }
    if(event.keyCode ===9){
      this.setState({isTip1Visible:false})
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
    if(event.keyCode ===9){
      this.setState({isTip2Visible:false})
    }
  };

  handleTaskBtn = (event) => {
    this.setState({
      tasks: [...this.state.tasks, this.state.taskText],
      taskText: "",
    });
    this.listInput.focus();
  };

  handleSubmit = () => {
    const { title, tasks } = this.state;
    const card = {
      title,
      tasks,
    };
    this.props.createCard(card);
    this.setState({
      tasks: [],
      taskText: "",
      title: "",
      isTip3Visible:false,
    });
    this.titleInput.focus();
  };

  render() {
    const { tasks, taskText, title, isTip1Visible,isTip2Visible,isTip3Visible } = this.state;
    const tip1Vis = isTip1Visible?{}:{visibility:'hidden'}
    const tip2Vis = isTip2Visible?{}:{visibility:'hidden'}
    const tip3Vis = isTip3Visible?{}:{visibility:'hidden'}
    
    const formItems = tasks.map((text, i) => (
      <FormListItem text={text} key={`formItem${i}`} />
    ));

    return (
      <div className="form">
        <p>Task Title</p>
        
        <input
          className="form__input"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          autoFocus={true}
          ref={(ip) => (this.titleInput = ip)}
          onChange={this.handleChange}
          onKeyDown={this.handleTitleEnter}
          />
          <div className="tooltip" style={tip1Vis}>
            <span className="tooltiptext">Press enter or tab to advance to Task Items</span>
          </div>
 
        <p>Task Items</p>
        <ul className="list__container">{formItems}</ul>
        <div className="input__container">
          <input
            className="form__input"
            type="text"
            placeholder="Task Item"
            name="taskText"
            value={taskText}
            ref={(ip) => (this.listInput = ip)}
            onChange={this.handleChange}
            onKeyDown={this.handleTaskEnter}
          />
          <div className="tooltip" style={tip2Vis}>
          <span className="tooltiptext">Press enter to start a new list item. Press tab to advance.</span>
          </div>
          <img
            className="add__icon"
            src={plusIcon}
            onClick={this.handleTaskBtn}
          />
        </div>
        <button type="button" onClick={this.handleSubmit}>
          Make the thing
        </button>
        <div className="tooltip" style={tip3Vis}>
          <span className="tooltiptext">Press enter or space to make the list</span>
        </div>
      </div>
    );
  }
}

export default Form;
