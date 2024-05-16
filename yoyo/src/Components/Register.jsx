import { TextField ,Button, Toolbar, AppBar } from '@mui/material'
import React from 'react'
import { Link} from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <br/><br/><br/><br/>
        <TextField id="outlined-basic" label="username" variant="outlined" /><br/><br/>
        <TextField id="outlined-basic" label="email" variant="outlined" /><br/><br/>
        <TextField id="outlined-basic" label="name" variant="outlined" /><br/><br/>
        <TextField id="outlined-basic" label="password" variant="outlined" type="password" />
        <Button variant="contained">Signup</Button>

    </div>
  )
}

export default Register