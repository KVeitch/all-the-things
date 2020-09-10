import React from 'react'
import List from '../List/List'
import './ListContainer.css'

const ListContainer = ({lists}) => {

  const mappedLists = lists.map((list, i)=><List data={list} key={`list${i}`}/>)

  return (<>
    <div className="list-container">
    <h1>Your Things</h1>
      <div className="lists">
      {mappedLists}
      </div>
    </div>
    </>
  )
}

export default ListContainer
