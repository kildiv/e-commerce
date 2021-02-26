import React from 'react'

function preview_collection({title, items}) {
  return (
    <div className='collection_name'>
      <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
          {items
          .filter((item, index) => index < 5)
          .map(item => ( 
            <div key={item.id}>{item.name}</div>
          ))
          }

        </div>
    </div>
  )
}

export default preview_collection