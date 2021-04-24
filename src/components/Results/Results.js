import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Results() {

    const rhymeReturn = useSelector(store => store.words.rhyme)
    const synonymReturn = useSelector(store => store.words.synonym)

    const [overlap, setOverlap] = useState('')

    //if there is
    const compare = (arrayOne, arrayTwo) => {

        let result;
        //if both words return some result, compare them and return
        if (arrayOne && arrayTwo) {
            result = arrayOne.filter(e => arrayTwo.indexOf(e) !== -1)
            if (!result[0]) {
                result = arrayTwo;
                result.unshift('eehhhh.... We couldn\'t find a match... So here\'s some synonyms instead')
            }
            return result;
        } else {
            return ['Ehhh... we didn\'t get a good result, try another search']
        }

    }

    useEffect(() => {
        const shared = compare(rhymeReturn.rhymes.all, synonymReturn.synonyms)
        setOverlap(shared)
    }, [])

    return (
        <>
            <h1>Your results!!</h1>
            <ul>
                {overlap ? overlap.map((word) => {
                    return (
                        <li>{word}</li>
                    )
                }) : <span></span>}
            </ul>
        </>
    )
}
