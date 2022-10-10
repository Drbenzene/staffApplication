import React from "react"
import { combineReducers } from 'redux'
import userReducers from "./userReducers"

export const rootReducer = combineReducers({
    user: userReducers,
})