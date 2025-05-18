export default function Friend({ friend }) {
    console.log(friend);
    let { name, email } = friend;
    return (
        <div className="box">
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
        </div>
    )
}