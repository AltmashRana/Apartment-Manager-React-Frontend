import { Add } from '@mui/icons-material'
import { Fab, Grid } from '@mui/material'
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
            <Grid container columnSpacing={2} rowGap={2}>
                {apartmentList.map((apartment) => (
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3} xxl={2} key={apartment.id} sx={{ minWidth: 'auto' }}>
                        <ApartmentCard apartment={apartment} />
                    </Grid>
                ))}
            </Grid>
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