import React, { useState } from 'react'

function BookCreate({onCreate}) {
  const [title,setTitle]=useState("");

  function handleChange(e){
    setTitle(e.target.value);
    
  }

  function handleSubmit(e){
    e.preventDefault();
    onCreate(title);
    setTitle("");
  }
  return (
    <div className='book-create'>

        <h3>  Add a Book!  </h3>
        <form onSubmit={handleSubmit}>
          <input className='input' type='text' value={title} onChange={handleChange} />
          <button className='button'> Create</button>
        </form>

    </div>
  )
}

export default BookCreate