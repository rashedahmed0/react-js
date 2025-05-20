import { useEffect, useState } from "react"
import Player from "./Player";

export default function Players() {
    let [player, setPlayer] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPlayer(data))
    }, [])
    return (
        <div>
            <h3>players : {player.length}</h3>
            {
                player.map(p => <Player player={p}></Player>)
            }
        </div>
    )
}