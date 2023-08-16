import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchUserById = () => 
    new Promise(
        resolve => 
            setTimeout(() => resolve({id:1, name: 'Max'})
        , 1000) 
    )

export const getUserById = createAsyncThunk('users/by-id', 
    async(userId, thunkApi) => {
        try {
            
        const responce = await fetchUserById(userId)
        return responce
        } catch(error){
            thunkApi.rejectWithValue({error})
        }

}
)