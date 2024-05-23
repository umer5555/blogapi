import React, { useState } from 'react'
import BookCreate from './BookCreate';
import './index.css'
import BookList from './BookList';
function Books() {

    const [book,setBook]=useState([]);

    function createBook(title){
      
        const updateBooks =[
            ...book,{
            id:Math.round(Math.random()*9999),
            title
        }
        ]
        setBook(updateBooks);
        console.log("New book added : ",updateBooks)
    }

    const deleteBookById =(id)=>{
        const updatebook= book.filter((delbook)=>{
            return delbook.id!==id
        });
        setBook(updatebook)
    }


  return (
    <div className='App'>
        <h1>Books</h1>
        {/* {book.length} */}
        <BookCreate onCreate={createBook}  />
        <BookList   allBooks={book} onDelete={deleteBookById} />

    </div>
  )
}

export default Books