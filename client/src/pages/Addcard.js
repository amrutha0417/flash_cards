import React from 'react'
import upload from '../images/upload.png'
import {useState,useEffect} from 'react';
import {useForm} from 'react-router-dom'
import Axios from "axios";
import {useNavigate } from 'react-router-dom';

function Addcard() {
 
  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate('/Widgets');
  };
  const [question,setQuestion]=useState("");
  const [answer,setAnswer]=useState("");

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      console.log(response)


    })
  },[])

  const add=()=>{
    
    Axios.post("http://localhost:3001/api/insert",{
      question:question,
      answer:answer
    }).then(()=>{
        alert("card added!!")

      }
      
      )
      console.log(answer);
    console.log(question);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:100}}>
    <form>
      <div style={{justifyContent:'center'}}>
    <div className="row">
      <div style={{marginLeft:30}}>
      <h4 style={{color:'blue',fontSize:20}}>Question(front)</h4>
      <input type="text" name="name" style={{width:300,marginTop:5,height:40}} onChange={(e)=>{
        setQuestion(e.target.value)
      }}/>
    </div>
    <div style={{marginLeft:30,marginTop:15}}>
      <h4 style={{color:'blue',fontSize:20}}>Answer(back)</h4>
      <input type="text" name="text
      " style={{width:300,height:40}}
      onChange={(e)=>{
        setAnswer(e.target.value)

      }}
      />
    </div>
     <div style={{flexDirection:'col'}}>
    <button style={{border:'none',backgroundColor:'white',width:160,marginTop:20,color:'blue'}}>Upload image</button>
    <img  src={upload} alt="image not found" width={20} height={20}  style={{color:'blue',filter:'blue',marginTop:10}}/>
    </div> 
   
    <div style={{flexDirection:'col',marginTop:30}}>
    <button type="submit" style={{width:100,marginLeft:60,backgroundColor:'white',color:'blue',height:30}}>Cancel</button>
    <button type="submit" style={{width:100,marginLeft:20,backgroundColor:'blue',color:'white',bordercolor:'blue',borderwidth:2,height:30}}
    onClick={() => { add(); navigateToHome();}}
    >Add</button>
    </div>
    
    </div>
    </div>
  </form>

  </div>
  )
}

export default Addcard