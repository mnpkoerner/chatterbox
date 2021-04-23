import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Words() {

    const dispatch = useDispatch()

    const rhymeReturn = useSelector(store=>store.words.rhyme)
    const synonymReturn = useSelector(store=>store.words.synonym)

    const [rhyme, setRhyme] = useState('');
    const [synonym, setSynonym] = useState('');


    return (
        <div>
            <h1>This is where the stuff will go</h1>
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
            <button
                onClick={()=>{
                    dispatch({type: 'GET_RHYME', payload: rhyme})
                    dispatch({type: 'GET_SYNONYM', payload: synonym})
                }}
            >SEND EM</button>
            <button onClick={()=>console.log(rhymeReturn, synonymReturn)}>LOGEM</button>
        </div>
    )
}
