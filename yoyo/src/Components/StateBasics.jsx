import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
  //var name="shahana"
  var [name,fname]=useState("shahana")

  var [val,setval]=useState()
  var [sub,setsub]=useState()

  const handleInput=(e)=>{ 
    setsub(e.target.value);


  }
  const submitHandler=()=>{
    console.log("clicked")
    setval(val)
  }
  return (
    <div style={{margin:'70px'}}>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <Typography varient='h1'>Welcome to {sub}</Typography>
      <br/>
      
      <TextField varient='outlined' onChange={handleInput}/>
      <Button varient='outlined' onClick={submitHandler}>submit</Button>
    </div>
  )
}

export default StateBasics