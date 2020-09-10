import React from 'react'
import './List.css'
import ListItem from '../ListItem/ListItem'

const List = ({data}) => {
  const {title, list} = data;
  const mappedListItems = list.map((item,i)=><ListItem item={item} key={`${title}${i}`}/>)
  return (
    <div className="card__list">
      <h3>{title}</h3>
      <ul>
      {mappedListItems}
      </ul>
    </div>
  )
}

export default List
