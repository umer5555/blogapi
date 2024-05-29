import React, { useState } from 'react'

function BookEdits({allBooks,editBookUpdat,formClose}) {

  const [title,setTitle]=useState(allBooks.title)

  const handleChange =(e)=>{
    setTitle(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    editBookUpdat (allBooks.id,title)
    formClose();
    console.log("new Title",title);
  }
  return (
   <>
    <form className='book-edit' onSubmit={handleSubmit}>
      <h3>Title</h3>
      <input className='input' value={title} onChange={handleChange}></input>
      <button className='button is-primary'>Update</button>
    </form>
   </>
  )
}

export default BookEdits