import React from "react";
import "./List.css";
import deleteIcon from "../../images/x-mark.svg";
import ListItem from "../ListItem/ListItem";

const List = ({ data, index, removeCard, removeCardClick }) => {
  const { title, tasks } = data;
  const mappedListItems = tasks.map((item, i) => (
    <ListItem item={item} key={`${title}${i}`} />
  ));
  return (
    <div
      className="card__list"
      tabIndex="0"
      data-index={index}
      onKeyDown={removeCard}
    >
      <div className="card__title">
        <h3>{title}</h3>
        <img
          className="delete__icon"
          data-index={index}
          src={deleteIcon}
          role="button"
          alt="delete button circle with an ex"
          onClick={removeCardClick}
        />
      </div>
      <ul>{mappedListItems}</ul>
    </div>
  );
};

export default List;
