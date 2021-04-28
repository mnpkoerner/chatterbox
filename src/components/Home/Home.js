import { useHistory } from 'react-router-dom'

export default function Home() {

    const history = useHistory()

    return (
        <div className="text-container">

            <header>
                <img src="/chatter.png" className="chat-head"></img>
            </header>
            
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
