import { Add } from '@mui/icons-material'
import { Box, Fab, Stack } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectAllApartments } from '../../redux/apartments/apartments.selectors'
import ApartmentCard from './ApartmentCard';

const ApartmentLV = ({
    apartmentList,
}) => {
    return (
        <>
            <Box p={2} sx={{ overFlowY: 'auto', height: '100%', flex: 2 }}>
                <Stack sx={{ scrollbarWidth: 'thin', flexDirection: { sx: 'column', md: 'row' } }} flexWrap="wrap" justifyContent="space-evenly" gap={2}>
                    {apartmentList.map((apartment) => (
                        <Box key={apartment.id}>
                            <ApartmentCard apartment={apartment} />
                        </Box>
                    ))}
                </Stack >
            </Box>
            <Fab color="primary" sx={{ size: { xs: 'medium', md: 'large' } }}>
                <Add />
            </Fab>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    apartmentList: selectAllApartments,
})

export default connect(mapStateToProps)(ApartmentLV);