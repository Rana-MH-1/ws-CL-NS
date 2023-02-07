import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

//add a user
export const AddUser = createAsyncThunk("user/AddUser", async(newUser,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/users/',newUser) //étape hedhi naba3thou request to add a user
        return data // l res taa server bsh n7ottouha f payload taa el action :AddUser
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }

})

// get all users
export const getAllDataUsers = createAsyncThunk("user/getAllDataUsers", async(_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/users/')
        return data;
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }
})

//Delete a User
export const DeleteUser = createAsyncThunk("user/DeleteUser", async(id,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.delete(`/api/users/${id}`)
        //dispatch(getAllDataUsers())
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }

} )

//Update Data User
export const UpdateDataUser = createAsyncThunk("user/UpdateDataUser", async(updatedUser,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.put(`/api/users/${updatedUser._id}`,updatedUser)
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }

} )



const UserSlice = createSlice({
    name:'user',
    initialState:{
        isLoading:false,
        user:{},
        users:[],
        msg:null,
        Errors : null
    },

    reducers:{},
    extraReducers:{
        [AddUser.pending] : (state,action)=>{
            state.isLoading = true
        },
        [AddUser.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.user = action.payload.newUser
            state.msg = action.payload.msg
        },
        [AddUser.rejected]: (state, action)=>{
            state.Errors = action.payload
    
        },
        [getAllDataUsers.pending] : (state,action)=>{
            state.isLoading = true
        },
        [getAllDataUsers.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.users = action.payload
        },
        [getAllDataUsers.rejected]: (state, action)=>{
            state.Errors = action.payload
    
        },
        [DeleteUser.pending] : (state)=>{
            state.isLoading = true
        },
        [DeleteUser.fulfilled] : (state,{type,payload})=>{
            state.isLoading = false
            state.users= state.users.filter(user=> user._id !== payload.deletedUser._id)
        },
        [DeleteUser.rejected]: (state,{type,payload} )=>{
            state.Errors = payload
    
        },
        [UpdateDataUser.pending] : (state)=>{
            state.isLoading = true
        },
        [UpdateDataUser.fulfilled] : (state,{type,payload})=>{
            state.isLoading = false
            state.users= state.users.map(user=>(user._id == payload._id)? {...user, ...payload} : user)
        },
        [UpdateDataUser.rejected]: (state,{type,payload} )=>{
            state.Errors = payload
    
        }
    

    }
})

export default UserSlice.reducer
