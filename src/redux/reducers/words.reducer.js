import { combineReducers } from 'redux';

const rhyme = (state = '', action) => {
    if(action.type === 'SET_RHYME'){
        console.log('in reducer')
        return action.payload
    }
    else if(action.type === 'CLEAR_RHYME'){
        return ''
    }
    else{
        return state;
    }
}

const synonym = (state = '', action) => {
    if(action.type === 'SET_SYNONYM'){
        console.log('in reducer')
        return action.payload
    }
    else if(action.type === 'CLEAR_SYNONYM'){
        return ''
    }
    else {
        return state;
    }
}


export default combineReducers({
    rhyme,
    synonym
})
