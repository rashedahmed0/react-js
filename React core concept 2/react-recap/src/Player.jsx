export default function Player({ player }) {
    let { name, email } = player;
    return (
        <div>
            <p>Name : {name} </p>
            <p>Email : {email}</p>
        </div>
    )
}