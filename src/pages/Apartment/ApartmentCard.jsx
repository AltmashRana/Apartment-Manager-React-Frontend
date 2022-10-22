import { Button, Card, CardContent, CardMedia, Paper, Typography, Box, Stack } from '@mui/material'
import React from 'react'
import photo from '../../assets/images/apartImage.jpg'

const ApartmentCard = ({
  apartment
}) => {
  return (
    <Paper>
      <Card sx={{ boxShadow: 1, boarderRadius: 10, background: '' }}>
        <Box sx={{ height: '42vh' }}>
          <CardMedia sx={{
            height: '22vh'
          }} image={photo} />
          <CardContent sx={{ height: '20vh' }}>
            <Typography fontWeight="bold" variant='h6' component={"h1"}>{apartment.title.slice(0, 60)}</Typography>
            <Typography>{apartment.bedrooms} Beds - {apartment.bathrooms} Baths - Sleeps {apartment.capacity}</Typography>
            <Stack direction="row" sx={{ marginTop: '1.5rem', alignItems: 'center' }}>
              <Button variant="outlined" marginRight={2}>More</Button>
              <Typography variant='h6' marginLeft={'auto'} fontWeight={"bold"} >Rs.{apartment.rent}/Month</Typography>
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </Paper>
  )
}

export default ApartmentCard