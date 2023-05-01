import React from 'react'
import  { useState } from 'react';


function Mycalender() {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     <h1>My calendar</h1>
    </div>
  )
}

export default Mycalender