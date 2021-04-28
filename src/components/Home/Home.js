import { useHistory } from 'react-router-dom'

export default function Home() {

    const history = useHistory()

    return (
        <div className="text-container">

            <header>
                <img src="/chatter.png" className="chat-head" alt="Chatterbox"></img>
            </header>

            <main className="text-container">

                <h2>
                    Don't stumble through sonnets or get hung up on haikus,
                </h2>
                <h2>
                    use Chatterbox to find the rhyme you can't unearth yourself.
                </h2>

                <button onClick={() => history.push('/words')}>Try It Out!</button>
                <div className="image-container">
                    <img src="/chomper-01.png" className="chat-head" alt="wind up clattering teeth with googly eyes"></img>

                </div>
            </main>

        </div>
    )
}
