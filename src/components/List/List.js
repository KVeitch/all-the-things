import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";

const List = ({ data, index, removeCard }) => {
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
      <h3 className="card__title">{title}</h3>
      <ul>{mappedListItems}</ul>
    </div>
  );
};

export default List;
