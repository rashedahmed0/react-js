// conditional rendering option 1
// export default function Todo({ todo }) {
//     console.log(todo);
//     let { title, completed, id } = todo;
//     if (completed === true) {
//         return <li style={{ listStyle: 'none ', textAlign: 'left', border: '2px solid green', margin: '10px', padding: '10px' }}>{id} .  done : {title}</li>
//     }
//     return <li style={{ listStyle: 'none ', textAlign: 'left', border: '2px solid red', margin: '10px', padding: '10px' }}>{id} .  do it  : {title}</li>
// }

// conditional rendering option 2 
// export default function Todo({ todo }) {
//     console.log(todo);
//     let { title, completed, id } = todo;
//     return (
//         <div>
//             <li style={{ listStyle: 'none ', textAlign: 'left', border: '2px solid green', margin: '10px', padding: '10px' }}>{completed === true ? 'finished' : 'Process'} : {id} . {title}</li>
//         </div>
//     )
// }

// conditional rendering option 3 
// export default function Todo({ todo }) {
//     console.log(todo);
//     let { title, completed, id } = todo;
//     return (
//         <div>
//             <li style={{ listStyle: 'none ', textAlign: 'left', border: '2px solid green', margin: '10px', padding: '10px' }}>{completed && 'finished'} : {id} . {title}</li>
//         </div>
//     )
// }

// conditional rendering option 4 
export default function Todo({ todo }) {
    console.log(todo);
    let { title, completed, id } = todo;
    return (
        <div>
            <li style={{ listStyle: 'none ', textAlign: 'left', border: '2px solid green', margin: '10px', padding: '10px' }}>{completed || 'Process'} : {id} . {title}</li>
        </div>
    )
}