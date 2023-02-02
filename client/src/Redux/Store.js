import { configureStore } from "@reduxjs/toolkit";
import User from './UserSlice'

export const Store = configureStore({reducer:{
    User
}})