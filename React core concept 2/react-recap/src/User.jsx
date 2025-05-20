export default function User({ user }) {
    let { name, email } = user
    const styels = {
        border: '2px solid tomato',
        margin: '10px'
    }
    return (
        <div style={styels}>
            <h3>name : {name}</h3>
            <p>email : {email}</p>
        </div>
    )
}