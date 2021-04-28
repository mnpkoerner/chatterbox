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
        if (!Number(rhyme) || !Number(synonym)){
            setRhyme('');
            setSynonym('');
            return false
        }
        dispatch({ type: 'GET_RHYME', payload: rhyme })
        dispatch({ type: 'GET_SYNONYM', payload: synonym })
    }


    return (
        <div className="text-container">
            <section className="text-container">

                <h1>placeholder for chatterbox graphic again</h1>
                <label for="synonym">I need a word that means something like:</label>
                <input
                    type="text"
                    id="synonym"
                    placeholder="means like"
                    value={synonym}
                    onChange={(event) => setSynonym(event.target.value)}>
                </input>

                <label for="rhyme">That rhymes with:</label>
                <input
                    type="text"
                    id="rhyme"
                    placeholder="rhymes with"
                    value={rhyme}
                    onChange={(event) => setRhyme(event.target.value)}>
                </input>

                <button onClick={() => { sendWords() }}>GO</button>

            </section>

            {(rhymeReturn ? <Results /> : <span></span>)}

        </div>
    )
}
