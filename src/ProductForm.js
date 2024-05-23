import React, { useState } from 'react'




function ProductForm() {

    const [name,setName]=useState([""])
    const [price,setPrice]=useState([""])

    function handleName(e){
        setName(e.target.value);
    }
function handlePrice(e){
    setPrice(e.target.value)
}

    function handleSubmit(e){
        e.preventDefault()
        console.log('name',name,price);
    }
  return (
    <div>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={handleName}  placeholder='Name'  />
            <input type='text' value={price}   onChange={handlePrice} placeholder='Price' />
            <button  >Add Product</button>

        </form>
    </div>
  )
}

export default ProductForm