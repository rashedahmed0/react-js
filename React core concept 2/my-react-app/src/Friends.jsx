import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './Friend';

export default function Friends() {
    let [friend, setFriend] = useState(0);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <div className='box'>
            <h3>friends: {friend.length}</h3>
            {
                friend.map(f => <Friend friend={f}></Friend>)
            }
        </div>
    )
}