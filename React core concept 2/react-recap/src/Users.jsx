import { useEffect, useState } from "react"
import User from "./User";

export default function Users() {
    let [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    return (
        <div style={{
            border: '2px solid red',
            padding: '10px',
            margin: '10px'
        }}>
            <h3>Users : {user.length}</h3>

            {
                user.map(u => <User key={u.id} user={u} ></User>)

            }

        </div>
    )
}