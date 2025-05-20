export default function Player({ player }) {
    console.log(player);
    return (
        <div>
            <p>name : {player.name}</p>
            <p>email :{player.email}</p>
        </div>
    )
}