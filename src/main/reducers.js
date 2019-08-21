import { combineReducers } from 'redux'
import semestresReducer from '../dashboard/semestres/semestresReducer'
import chatReducer from '../chat/chatReducer';


const rootReducer = combineReducers({
    provas: semestresReducer,
    chat: chatReducer
})

export default rootReducer