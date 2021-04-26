import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Results from '../Results/Results'


export default function Words() {

    const dispatch = useDispatch()

    //once a rhyme comes back, it renders the results component
    const rhymeReturn = useSelector(store => store.words.rhyme)

    //state to deal with rhymes and synonyms
    const [rhyme, setRhyme] = useState('');
    const [synonym, setSynonym] = useState('');

    const clearReducers = () => {
        dispatch({ type: 'CLEAR_RHYME' })
        dispatch({ type: 'CLEAR_SYNONYM' })
    }

    //dispatch to call results from API
    const sendWords = () => {
        clearReducers()
        dispatch({ type: 'GET_RHYME', payload: rhyme })
        dispatch({ type: 'GET_SYNONYM', payload: synonym })
    }


    return (
        <>
            <header>
                <h1>placeholder for chatterbox graphic again</h1>
                <input
                    type="text"
                    placeholder="means like"
                    value={synonym}
                    onChange={(event) => setSynonym(event.target.value)}>
                </input>
                <input
                    type="text"
                    placeholder="rhymes with"
                    value={rhyme}
                    onChange={(event) => setRhyme(event.target.value)}>
                </input>
            </header>
            <button
                onClick={() => {
                    sendWords()
                }}>
                GO
            </button>
            {(rhymeReturn ? <Results /> : <span></span>)}
        </>
    )
}
