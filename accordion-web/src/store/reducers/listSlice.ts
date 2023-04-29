import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [
    {
        name: 'Moe',
        occupation: 'Software Engineer',
        residence: 'UAE'
    },
    {
        name: 'Ahmad',
        occupation: 'SDET',
        residence: 'UAE'
    },
    {
        name: 'Rami',
        occupation: 'Product Owner',
        residence: 'UAE'
    }
]
};


export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload      
        }
    }    
})


export const {setList} = listSlice.actions;

export default listSlice.reducer;