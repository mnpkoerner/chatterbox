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
        if (Number(rhyme) || Number(synonym)) {
            setRhyme('');
            setSynonym('');
            return false
        }
        dispatch({ type: 'GET_RHYME', payload: rhyme })
        dispatch({ type: 'GET_SYNONYM', payload: synonym })
        setRhyme('')
        setSynonym('')
    }


    return (
        <div className="text-container">

            <header>
                <img src="/chatter.png" className="chat-head" alt="Chatterbox"></img>
            </header>

            <section className="text-container">

                <div>
                    <label htmlFor="synonym">I need a synonym for...</label>
                    <input
                        type="text"
                        id="synonym"
                        placeholder="synonym..."
                        value={synonym}
                        onChange={(event) => setSynonym(event.target.value)}>
                    </input>
                </div>

                <div>
                    <label htmlFor="rhyme">That rhymes with...</label>
                    <input
                        type="text"
                        id="rhyme"
                        placeholder="rhyme..."
                        value={rhyme}
                        onChange={(event) => setRhyme(event.target.value)}>
                    </input>
                </div>

                <div>
                    <button onClick={() => { sendWords() }}>GO</button>
                </div>

            </section>

            {(rhymeReturn ? <Results /> : <img src="/chomper-01.png" className="chat-head" alt="wind up clattering teeth with googly eyes"></img>)}

        </div>
    )
}
