import React from 'react'
import dots from '../images/dots.png'
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import {useForm} from 'react-router-dom'
import Axios from "axios";

import '../App.css'

function Widgets() {
  const [data,setData]=useState([])
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setData(response.data)


    })
  },[])
  console.log(data)

  return (
    <div className='widgets'>
      <h2 style={{color :'blue',marginLeft:50}}>Flashcards</h2>
      
    <div style={{gap:100}}>
    {data.map((val)=>{
      return ( 
  <div class="column" style={{marginBottom:50,marginLeft:40}}>
    <div class="card">
     <h3 style={{color:'blue',fontWeight:'800'}}>{val.question}</h3>
     <h3 style={{color:'blue',fontWeight:'300'}}>{val.answer}</h3>
     <img  src={dots} alt="image not found" width={5} height={15} style={{color:'blue',marginLeft:300}}/>
    </div>
  </div>

      )
    })
    

    }
    </div>
    <Link to="/Addcard">
      <button style={{ position: 'fixed', bottom: '20px', right: '20px',color:'white',backgroundColor:'blue',borderRadius:25,borderColor:'blue',fontSize: '18px', padding: '12px 24px' ,width:'150px' }}>
        
         + Add Card 
        </button>
    </Link>
    </div>
  )
}
export default Widgets

        
      

    
