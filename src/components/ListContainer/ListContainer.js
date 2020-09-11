import React from "react";
import List from "../List/List";
import "./ListContainer.css";

const ListContainer = ({ lists, removeCard, removeCardClick }) => {
  const mappedLists = lists.map((list, i) => (
    <List
      data={list}
      index={i}
      key={`list${i}`}
      removeCard={removeCard}
      removeCardClick={removeCardClick}
    />
  ));

  return (
    <div className="list-container">
      <h1 className="container__title">Your Things</h1>
      <div className="lists">{mappedLists}</div>
    </div>
  );
};

export default ListContainer;
