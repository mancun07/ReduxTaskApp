import {combineReducers} from 'redux'
import TaskReducer from './TaskReducer'
import TechReducer from './TechReducer'

export default combineReducers({
    task: TaskReducer,
    tech: TechReducer
})