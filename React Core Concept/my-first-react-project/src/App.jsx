// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Task from './Task'


function App() {
  // let actors = ['amir KHan ', 'salman khan', 'sarukh khan '];

  //   {
  //     id: 1,
  //     name: "Taylor Swift",
  //     age: 34
  //   },
  //   {
  //     id: 2,
  //     name: "Ed Sheeran",
  //     age: 33
  //   },
  //   {
  //     id: 3,
  //     name: "Beyoncé",
  //     age: 42
  //   },
  //   {
  //     id: 4,
  //     name: "The Weeknd",
  //     age: 34
  //   }
  // ];

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person1 name='rashed' age={14}></Person1>
      <Person2 name='ahmed' age={35}></Person2>
      <Task task='learn js' isDone={true}></Task>
      <Task task='learn react' isDone={false}></Task>
      <Task task='learn html , css' isDone={true}></Task>










      {/* <Actor name='riaj'></Actor>
      {
        actors.map((actor) => <Actor name={actor}></Actor>)
      } */}


      {/* <Todo task='learn react' isDone={true}></Todo>
      <Todo task='learn js' isDone={false}> </Todo>
      <Todo task='learn jsx' isDone={true}></Todo> */}


      {/* <Player name='rashed' age='25' position='defender'></Player>
      <Player2 age='35' position='midfilder'></Player2>
      <Player name='ahmed' age='65' position='goalkepper '></Player>
      <Device name='laptop' price='30000'></Device>
      <Device name='mobile' price='20000'></Device>
      <Device name='watch' price='2500'></Device>
      <Person></Person>
      <Person1></Person1>
      <Student class='8' roll='24'></Student> */}

    </>
  )
}

function Person() {
  return (
    <>
      <h3>name : rial</h3>
      <p>age : 25 </p>
    </>
  )
}
function Person1(props) {
  console.log(props);
  return (
    <>
      <h3>name : {props.name}</h3>
      <p>age : {props.age} </p>
    </>
  )
}
function Person2({ name, age }) {

  return (
    <>
      <h3>name : {name}</h3>
      <p>age : {age} </p>
    </>
  )
}










// function Player({ name, age, position }) {
//   return (
//     <>
//       <h3>his name is :{name}</h3>
//       <h3>his age is : {age} </h3>
//       <h3>his position is : {position}</h3>
//     </>
//   )
// }
// function Player2({ name = 'rial', age, position }) {
//   return (
//     <>
//       <h3>his name is :{name}</h3>
//       <h3>his age is : {age} </h3>
//       <h3>his position is : {position}</h3>
//     </>
//   )
// }



// function Device(props) {
//   console.log(props);
//   return (
//     <>
//       <h1>this device is : {props.name} and price is : {props.price} </h1>
//     </>
//   )
// }









// function Person() {
//   const age = 24;
//   return <h3 style={{
//     border: '2px solid white',
//     padding: '10px',
//     borderRadius: '10px',
//     margin: '10px'
//   }}>i am ahmed i am {age} years old </h3>
// }

// function Person1() {

//   const ages = [1, 2, 3, 4, 5];
//   const borr = {
//     border: '2px solid blue',
//     padding: '10px',
//     borderRadius: '10px',
//     margin: '10px'
//   }

//   return (

//     <>
//       <h1 style={borr}>{ages[0]} + {ages[4]} = {ages[0] + ages[4]}</h1>

//     </>

//   )



// }
// function Student(props) {
//   console.log(props);
//   let myself = { name: 'rashed ', age: 25 };
//   return (
//     < >
//       <div className='student'>
//         <h1>i am {myself.name} i am {myself.age} years old  </h1>
//         <p>class :{props.class}</p>
//         <p>roll : {props.roll}</p>

//       </div>
//     </>
//   )

// }


export default App
