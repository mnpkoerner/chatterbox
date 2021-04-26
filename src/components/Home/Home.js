import { useHistory } from 'react-router-dom'

export default function Home() {

    const history = useHistory()

    return (
        <>
            <header><h1>Placeholder for Chatterbox image</h1></header>
            <main>
                <p>Longwinded description of what this thing is supposed to do</p>
                <button
                    onClick={() => history.push('/words')}
                >Try It Out!</button>
            </main>
        </>
    )
}
