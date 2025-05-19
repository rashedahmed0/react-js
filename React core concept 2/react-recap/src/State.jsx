import { useState } from "react"

export default function State() {
    let [player, setPlayer] = useState(11);

    function addPlayer() {
        let addMember = player + 1;
        setPlayer(addMember);
    }
    let removePlayer = () => {
        let removeMember = player - 1;
        setPlayer(removeMember);

    }
    return (
        <div>
            <h3>player : {player}</h3>
            <button onClick={addPlayer}>add </button>
            <button onClick={removePlayer}>remove </button>
        </div>
    )
}