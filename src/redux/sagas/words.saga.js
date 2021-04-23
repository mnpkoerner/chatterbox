import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getRhyme(action) {
    try {
        console.log('in getRhyme saga with payload', action.payload)
            const response = yield axios.get(`/words/rhyme/${action.payload}`)
            console.log('rhyme response saga:', response.data)
            yield put({ type: 'SET_RHYME', payload: response.data})
    } catch (error) {
        console.error('error from getRhyme saga:', error)
    }
}
function* getSynonym(action) {
    try {
        console.log('in getSynonym saga with payload', action.payload)
            const response = yield axios.get(`/words/synonym/${action.payload}`)
            console.log('synonym response saga:', response.data)
            yield put({ type: 'SET_SYNONYM', payload: response.data})
    } catch (error) {
        console.error('error from getSynonym saga:', error)
    }
}


function* wordsSaga() {
    yield takeLatest('GET_RHYME', getRhyme);
    yield takeLatest('GET_SYNONYM', getSynonym)
}

export default wordsSaga;
