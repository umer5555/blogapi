import React from 'react'
import BookShow from './BookShow'
function BookList({allBooks,onDelete,editBookUpdat}) {
  const renderBooks= allBooks.map((book)=>{
      return <BookShow key={book.id} allBooks={book} onDelete={onDelete}  editBookUpdat={editBookUpdat}/>
  })
  return (
    <div className='book-list'>
      {renderBooks}
    </div>
  )
}

export default BookList