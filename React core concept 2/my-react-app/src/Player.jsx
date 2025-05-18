import { useState } from "react"

export default function Player() {
    // use here useState 
    let [player, setPlayer] = useState(11);
    let playerStyle = {
        border: '2px solid red',
        padding: '10px ',
        margin: '10px '


    }

    let addMember = () => {
        let addPlayer = player + 1;
        setPlayer(addPlayer);
    }
    let removeMember = () => {
        let removePlayer = player - 1;
        setPlayer(removePlayer);
    }
    return (
        <div style={playerStyle}>
            <h3>Player : {player}</h3>
            <button onClick={addMember}>Add </button>
            <button onClick={removeMember}>Remove</button>
        </div>
    )
}