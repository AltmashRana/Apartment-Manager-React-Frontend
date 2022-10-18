import { Box, Button, Input, Paper, Typography } from '@mui/material';
import React from 'react'

const Home = () => {
  return (
    <Box>
      {/* <Typography>Bye</Typography> */}
      <Button>Hello</Button>
      <Box sx={{with: '100px', height: '100px'}}></Box>
      <Paper>
        <Box sx={{with: '100px', height: '100px'}}></Box>
      </Paper>
      <Input></Input>
    </Box>
  )
}

export default Home