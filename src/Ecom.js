import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function Ecom() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
            result.json().then((res)=>{
                setData(res)
            })
        })
    },[])
    // console.log(data);

    
  return (
    <div>
    {data.map((allnews,index) => (

<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>
  {data.map((product, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Item>
    </Grid>
  ))}
</Grid>
</Box>




))}
 
  </div>
  )
}

export default Ecom