import React from 'react'
import BookShow from './BookShow'
function BookList({allBooks,onDelete}) {
  const renderBooks= allBooks.map((book)=>{
      return <BookShow key={book.id} allBooks={book} onDelete={onDelete} />
  })
  return (
    <div className='book-list'>
      {renderBooks}
    </div>
  )
}

export default BookList