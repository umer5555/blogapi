import React from 'react'
 
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

function Crud() {

  const Porducts=[
    {
      id:1,
      name:'PC',
      price:25000

    },
    {
      id:2,
      name:'Laptop',
      price:80000

    }
  ]
  return (
    <div className='App'>
      <ProductForm   />
      <h2>ALl Products</h2>
    
        {
          Porducts.map((item,index)=>
          <div key={index}> 
            {/* {item.id} */}
          </div>
          )
        }
    
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
          {Porducts.map((item,index) => (
            <TableRow key={index}>
               
              <TableCell align="left">{index+1}</TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left"> <Button variant="outlined" startIcon={<EditIcon />}> Edit</Button> 
               <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button></TableCell>
             
              

 
              
             
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