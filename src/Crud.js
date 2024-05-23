import React, { useState } from 'react'
 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductForm from './ProductForm';
import { Products } from './Products';

import { useEffect } from 'react';
function Crud() {

const [data,setData]=useState([])

const [name,setName]=useState([""]);

useEffect(()=>{
   setData(Products)
},[])


const [id,setId]=useState([]);
const [price,setPrice]=useState([""])
const [update,setUpdate]=useState(false);


function handleEdit(id){
  // alert(id);
  setUpdate(true)
  const dt=data.filter(item=>item.id===id);
  if(dt!==undefined){
    setId(id);
    setName(dt[0].name);
    setPrice(dt[0].price)
    
  }
}
function dataUpdate(){
  // alert('data updated....')
  const index=data.map((item)=>{
    return item.id;
  }).indexOf(id);

  const dt=[...data];
  dt[index].name=name;
  dt[index].price=price;
  setData(dt);
handleClear();
  

}

function handleClear(){
  setId(0);
  setName('')
  setPrice('')
  setUpdate(false);
}

const handleDelete=(id)=>{
  // alert(id);
  if (id>0){
    if(window.confirm("Are you sure to delete product? ")){
      const dt=data.filter(item=>item.id!==id);
    setData(dt);
    }
  }
}

function handleName(e){
  setName(e.target.value);
}
function handlePrice(e){
setPrice(e.target.value)
}

function handleSubmit(e){
  // alert('data Added...')
  e.preventDefault()
  // console.log('name',name,price);
  const dt=[...data];
  const newObject={
    id:Products.length+1,
    name:name,
    price:price
  }
  dt.push(newObject);
  setData(dt);
  handleClear();
}
  

  
  return (
    <div className='App'>
      {/* <ProductForm   /> */}
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={handleName}  placeholder='Name'  />
            <input type='text' value={price}   onChange={handlePrice} placeholder='Price' />
           {!update ?
             <button  >Add Product</button> 
           
            : 
           
            <button onClick={dataUpdate}>Update</button>
           }

        </form>
      <h2>ALl Products</h2>
    
      
    
        <Container>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Action</TableCell>
             


           
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item,index) => (
            <TableRow key={item.id}>
               
              <TableCell align="left">{item.id}</TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left"> <Button onClick={()=>handleEdit(item.id)} variant="outlined" startIcon={<EditIcon />}> Edit</Button> 
               <Button onClick={()=>handleDelete(item.id)}   variant="outlined" startIcon={<DeleteIcon />}>Delete</Button></TableCell>
             
              

 
              
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>

    
    </div>
  )
}

export default Crud