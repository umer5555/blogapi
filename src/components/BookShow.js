import React from 'react'

function BookShow({allBooks,onDelete}) {

  const handleDelete=()=>{
    onDelete(allBooks.id);
  }

  return (
    <div className='book-show'>{allBooks.title}
    <div className='actions'>
    <button className='delete' onClick={handleDelete} >Delete</button>
    </div>
       
    </div>
    

  )
}

export default BookShow