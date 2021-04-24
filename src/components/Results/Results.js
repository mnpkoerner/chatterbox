import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Results() {

    const rhymeReturn = useSelector(store => store.words.rhyme)
    const synonymReturn = useSelector(store => store.words.synonym)

    const [overlap, setOverlap] = useState('')

    //if there is
    const compare = (arrayOne, arrayTwo) => {
        console.error('in compare')
        let venn;
        if (arrayOne && arrayTwo) {
            venn = arrayOne.filter(e => arrayTwo.indexOf(e) !== -1)
        }
        if(!venn[0]){
            venn = arrayTwo;
            venn.unshift('No results matched your search, instead some synonyms')
        }
        console.error('before return', venn)
        return venn;
    }

    useEffect(() => {
        const shared = compare(rhymeReturn.rhymes.all, synonymReturn.synonyms)
        setOverlap(shared)
    }, [])

    return (
        <>
            <h1>THERE BE STUFF</h1>
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
