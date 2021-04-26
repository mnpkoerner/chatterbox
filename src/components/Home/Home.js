import { useHistory } from 'react-router-dom'

export default function Home() {

    const history = useHistory()

    return (
        <div className="text-container">
            <header><h1>Placeholder for Chatterbox image</h1></header>
            <main>

                <p>
                    Don't stumble through sonnets or get hung up on haikus,
                    use Chatterbox to find the rhyme you can't unearth yourself.
                </p>

                <button onClick={() => history.push('/words')}>Try It Out!</button>

            </main>
        </div>
    )
}
