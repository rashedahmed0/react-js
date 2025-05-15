// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Player name='rashed' age='25' position='defender'></Player>
      <Player2 age='35' position='midfilder'></Player2>
      <Player name='ahmed' age='65' position='goalkepper '></Player>
      <Device name='laptop' price='30000'></Device>
      <Device name='mobile' price='20000'></Device>
      <Device name='watch' price='2500'></Device>
      <Person></Person>
      <Person1></Person1>
      <Student class='8' roll='24'></Student>

    </>
  )
}

function Player({ name, age, position }) {
  return (
    <>
      <h3>his name is :{name}</h3>
      <h3>his age is : {age} </h3>
      <h3>his position is : {position}</h3>
    </>
  )
}
function Player2({ name = 'rial', age, position }) {
  return (
    <>
      <h3>his name is :{name}</h3>
      <h3>his age is : {age} </h3>
      <h3>his position is : {position}</h3>
    </>
  )
}



function Device(props) {
  console.log(props);
  return (
    <>
      <h1>this device is : {props.name} and price is : {props.price} </h1>
    </>
  )
}









function Person() {
  const age = 24;
  return <h3 style={{
    border: '2px solid white',
    padding: '10px',
    borderRadius: '10px',
    margin: '10px'
  }}>i am ahmed i am {age} years old </h3>
}

function Person1() {

  const ages = [1, 2, 3, 4, 5];
  const borr = {
    border: '2px solid blue',
    padding: '10px',
    borderRadius: '10px',
    margin: '10px'
  }

  return (

    <>
      <h1 style={borr}>{ages[0]} + {ages[4]} = {ages[0] + ages[4]}</h1>

    </>

  )



}
function Student(props) {
  console.log(props);
  let myself = { name: 'rashed ', age: 25 };
  return (
    < >
      <div className='student'>
        <h1>i am {myself.name} i am {myself.age} years old  </h1>
        <p>class :{props.class}</p>
        <p>roll : {props.roll}</p>

      </div>
    </>
  )

}


export default App
