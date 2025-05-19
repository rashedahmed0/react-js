// export default function Todo({ task, isDone }) {
//     return (
//         <div>
//             <li>task : {task} </li>
//         </div>
//     )
// }

// conditional rendering option 1 ; 
// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>finished : {task}</li>
//     }
//     else {
//         return <li>Processing : {task}</li>
//     }
// }

// conditional rendering option 2 
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>{task} : done </li>
//     }
//     return <li>{task} : do it</li>
// }

//conditional rendering option 3 
// export default function Todo({ task, isDone }) {
//     return (
//         <div>
//             <li>{isDone ? 'done' : 'doit'} : {task}</li>
//         </div>
//     )
// }
//conditional rendering option 4 
// export default function Todo({ task, isDone }) {
//     return (
//         <div>
//             <li>{isDone && 'done'} : {task}</li>

//         </div>
//     )
// }
//conditional rendering option 4 
export default function Todo({ task, isDone }) {
    return (
        <div>
            <li>{isDone || 'do it'} : {task}</li>

        </div>
    )
}