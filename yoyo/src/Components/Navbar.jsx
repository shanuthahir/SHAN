import { AppBar, Toolbar, Typography ,Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography variant='h3'>Home</Typography>
            <Button variant="contained">Login</Button>&nbsp;
            <Button variant="contained">
                <Link to='/reg' >Signup</Link>
            </Button>
            <Button variant="contained">
                 <Link to='/u' >Button</Link>
            </Button>
           < Button variant="contained">
                 <Link to='/c' >Counter</Link>
           </Button> 
           < Button variant="contained">
                 <Link to='/use' >Use</Link>
           </Button> 
           < Button variant="contained">
                 <Link to='/view' >View</Link>
           </Button> 
           
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar