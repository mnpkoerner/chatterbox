import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


export default function Results() {

    const rhymeReturn = useSelector(store => store.words.rhyme)
    const synonymReturn = useSelector(store => store.words.synonym)

    const [overlap, setOverlap] = useState('')

    //first two conditional blocks render if one or the two serach terms don't return anything
    //third block filters the two results from the API and pushes any result they share into
    //a new array that renders.
    const compare = (arrayOne, arrayTwo) => {

        let result;

        if (!arrayOne && arrayTwo){
            result = arrayTwo
            result.unshift('Your search didn\'t dig up anything too good, here\'s some synonyms instead')
            return result
        }
        else if (arrayOne && !arrayTwo){
            result = arrayOne
            result.unshift('We couldn\'t dig up anything too good, so here\'s some words that rhymed')
            return result;
        }
        else if (arrayOne && arrayTwo) {
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
            <ul>
                {overlap ? overlap.map((word) => {
                    return (
                        <li key={word}>{word}</li>
                    )
                }) : <span></span>}
            </ul>
        </>
    )
}
