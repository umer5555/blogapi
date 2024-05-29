import React, { useState } from 'react'
import BookEdits from './BookEdits'
function BookShow({allBooks,onDelete,editBookUpdat}) {

  const [bookEdit,setBookEdit]=useState(false);

  
  const handleDelete=()=>{
    onDelete(allBooks.id);
  }

  const handleEdit =()=>{
    setBookEdit(!bookEdit);
  }

  const formClose=()=>{
    setBookEdit(false);
  }


  let content = <h3>{allBooks.title}</h3>
  if (bookEdit){
     content =  <BookEdits allBooks={allBooks} formClose={formClose}  editBookUpdat={editBookUpdat}/>
  }
  return (
    <div className='book-show'>
           <img 
        src={`https://picsum.photos/seed/${allBooks.id}/300/200`} 
        alt='...' 
      />

      {content}
      
    <div className='actions'>
    <button className='edit' onClick={handleEdit} >Edit</button>
    <button className='delete' onClick={handleDelete} >Delete</button>

    </div>
       
    </div>
    

  )
}

export default BookShow