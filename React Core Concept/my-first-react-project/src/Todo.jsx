// export default function Todo({ task, isDone }) {
//     return (
//         <>
//             <li>task : {task}</li>
//         </>
//     )
// }


// condition rendaring option 1
// export default function Todo({ task, isDone }) {

//     if (isDone === true) {
//         return <li><span style={{ color: 'green' }}>finished:</span>{task}</li>
//     }
//     else {
//         return <li><span style={{ color: 'red' }}>Proccess :</span> {task}</li>
//     }

// }

// conditional rendaring option 2 
// export default function Todo({ task, isDone }) {

//     return (
//         <li>{isDone ? 'finish ' : 'work on'}  : {task} </li>
//     )

// }

// condtional rendaring 3
// export default function Todo({ task, isDone }) {

//     return (
//         <li>{task} : {isDone && "done"}  </li>
//     )

// }

// conditonal rendaring 4 
// export default function Todo({ task, isDone }) {

//     return (
//         <li>{task}: {isDone || 'do it'} </li>
//     )

// }


// conditonal rendaring  
export default function Todo({ task, isDone }) {
    let listItem;

    if (isDone) {
        listItem = <li>{task} : done </li>
    }
    else {
        listItem = <li>{task} : do it </li>
    }
    return listItem;


}