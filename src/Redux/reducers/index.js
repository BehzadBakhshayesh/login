import {combineReducers} from 'redux'
import {isLogin, loading} from './loginReducer'
import { countriesReducer } from './countriesReducer'

export default combineReducers({
    isLogin,
    loading,
    countriesReducer,
})
