import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Results () {

    const rhymeReturn = useSelector(store => store.words.rhyme)
    const synonymReturn = useSelector(store => store.words.synonym)

    const [overlap, setOverlap] = useState('')

    const compare = (arrayOne, arrayTwo) =>{
        const intersections = arrayOne.filter(e => arrayTwo.indexOf(e) !== -1)
        console.log('intersections is', intersections)
        return intersections;
    }

    useEffect(()=>{
        const shared = compare(rhymeReturn.rhymes.all, synonymReturn.synonyms)
        setOverlap(shared)
    }, [])
    return(
        <>
        <h1>THERE BE STUFF</h1>
        <ul>
        {overlap ? overlap.map((word)=>{
            return(
                <li>{word}</li>
            )
        }) : <span></span>}
        </ul>
        </>
    )
}
