import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react';

function Api() {

    const [data,setData]=useState([]);

useEffect(()=>{
    fetch("https://type.fit/api/quotes").then((result)=>{
        result.json().then((res)=>{
            setData(res)
        })
    })
},[])
// console.log(data);


const [news,setNews]=useState([]);

useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-04-20&sortBy=publishedAt&apiKey=be02b8dfbca045a4a89dce9d968d54ac').then((result)=>{
        result.json().then((res)=>{
            setNews(res.articles)
        })
    })
},[])
console.log(news);
  return (
    
    <div className='App'>
        <h3>API Test </h3>
        <table > 
            <tr>
            <td>Id</td>
            <td>Author</td>
            <td>Title</td>
            <td>description</td>
            <td>urlToImage</td>
            <td>publishedAt</td>
           
            </tr>
           
                        {data.map((allnews,index) => (

                      <tr key={index} >
                        
                          <td>{index+1}</td>
                          <td>{allnews.author}</td>
                          <td>{allnews.title}</td>
                          <td>{allnews.description}</td>
                          <img src={allnews.urlToImage} alt="Article" style={{ width: '100px', height: 'auto' }} />
                          <td>{allnews.publishedAt}</td>
                           
                      </tr>
            
             

            ))}
        </table>
        {/* <table>
             {  news.map((newnews)=>
                    <tr>
                      <td>  {newnews.id}</td>
                    </tr>
                )
             }
        
         
        </table> */}

        
    </div>
  )
}

export default Api