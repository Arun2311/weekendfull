
import { createSlice } from "@reduxjs/toolkit";



const initialstate= {
    name : "",

}



const authslice = createSlice({
    name : "authslice",
    initialstate,
    reducers:{
        namechange : (state)=>{
            state.value+1
        }
    }

})


export const {namechange} =authslice.actions

export default authslice.reducer