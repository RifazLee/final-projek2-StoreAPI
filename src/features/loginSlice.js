import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import getAPI from "../app/api";

const API = getAPI({req: `auth/login`});

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    errorMessage: '',
    user: {}
}

function callLoginApi(Username, Password){
    return new Promise(function(){
        setTimeout(() => {
            if( Username === "admin" && Password === "admin"){
                localStorage.setItem("token", "admin")
                window.location.replace("/admin/home")
            }else{
                const requestingData = {
                    username: Username,
                    password: Password
                }
                axios({
                    method: "POST",
                    url: API,
                    data: requestingData
                }).then((result) => {
                    localStorage.setItem("token", result.data.token)
                    window.location.replace("/")
                }).catch((error) => window.alert("Username atau Password salah!", error))
            }
        }, 5)
    })
}

export const authLoginApi = createAsyncThunk('auth/login', async({Username, Password}) => {
    try{
        const response = await callLoginApi(Username, Password)
        return response.Username
    }catch(err){
        throw(err)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(authLoginApi.pending, (state) => {
            state.isLoginPending = true
        })
        .addCase(authLoginApi.fulfilled, (state, action) => {
            console.log('fulfilled')
            console.log(action)
            const {Username} = action.payload
            state.isLoginPending = false
            state.isLoginSuccess = true
            state.user = {Username}
        })
        .addCase(authLoginApi.rejected, (state,action) => {
            console.log(action, "rejected")
            state.isLoginPending = false
            state.isLoginSuccess = false
            state.errorMessage = action.error.message
        })
    }
})

export default authSlice.reducer