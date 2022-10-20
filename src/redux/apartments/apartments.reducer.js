

const _initialState = {
    apartmentList: [
        {
            id: 1,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 2,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 3,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 4,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 5,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 6,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 7,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 8,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        }
    ]
}


const apartmentReducer = (state = _initialState, action) => {
    const { type, payload } = action;

    switch(type){
        default:
            return state;
    }
}


export default apartmentReducer