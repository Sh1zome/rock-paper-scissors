import './header.css'
import { Avatar, Box, Button, Typography } from '@mui/material'

function Header() {

  return (
    <>
        <div className='header'>
            <Typography className='title'>
                Rock-Paper-Scissors
            </Typography>
            <Box className='profile'>
                <Button>Login</Button>
                <Button>Logout</Button>
                <Avatar alt="" src="" />
            </Box>
        </div>
    </>
  )
}

export default Header
