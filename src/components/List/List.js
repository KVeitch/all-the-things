import React from 'react'
import './List.css'
import ListItem from '../ListItem/ListItem'

const List = ({data}) => {
  const {title, tasks} = data;
  const mappedListItems = tasks.map((item,i)=><ListItem item={item} key={`${title}${i}`}/>)
  return (
    <div className="card__list">
      <h3 className="card__title">{title}</h3>
      <ul>
      {mappedListItems}
      </ul>
    </div>
  )
}

export default List
