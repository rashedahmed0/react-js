// export default function Task({ task, isDone }) {
//     return (
//         <>
//             <li>tast : {task} </li>
//         </>
//     )
// }

// conditional rendaring option 1 
// export default function Task({ task, isDone }) {
//     if (isDone === true) {
//         return <li>{task} : done</li>
//     }
//     else {
//         return <li> {task} : do it </li>
//     }
// }
// conditional rendaring opetion 2
// export default function Task({ task, isDone }) {
//     if (isDone) {
//         return <li>Finish :{task}</li>
//     }
//     return <li>Proccess :  {task}  </li>

// }
// conditional rendaring option 3
// export default function Task({ task, isDone }) {
//     return (
//         <>
//             <li>{(isDone) ? 'done ' : 'do it'} : {task}</li>
//         </>
//     )

// }
// conditional rendaring option 4
// export default function Task({ task, isDone }) {
//     return (
//         <>
//             <li>{(isDone) && 'done '} : {task}</li>
//         </>
//     )

// }
// conditonal rendaring option 5 
export default function Task({ task, isDone }) {
    let listItem1;
    if (isDone) {
        listItem1 = <li>done : {task};</li>
    }
    else {
        listItem1 = <li>do it : {task};</li>
    }
    return listItem1;

}



