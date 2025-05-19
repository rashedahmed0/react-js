import Ages from './Ages';
import './App.css'
import Handls from './Handls';
import Student from './Student';
import Todo from './Task';

function App() {
  let ages = [12, 43, 64, 34];
  let students = [
    { name: 'rial', age: 25 },
    { name: 'rashed', age: 22 },
    { name: 'ahemd', age: 22 }
  ];


  return (
    <>
      <h1>React Core Concept Recap</h1>
      <Handls></Handls>

      {
        students.map(s => <Student student={s}></Student>)
      }
      {
        ages.map(a => <Ages age={a}></Ages>)
      }

      <Todo task='learn js' isDone={true}></Todo>
      <Todo task='learn react js' isDone={false}></Todo>
      <Todo task='learn learn html' isDone={true}></Todo>

      <Person></Person>
      <Person1 name='rashed' age={26}></Person1>
      <Person2 name='ahemd' age={27}></Person2>


    </Events >
  )
}

function Person() {
  return (
    <div className='box'>
      <h3>name : rial</h3>
      <p>age : 25</p>
    </div>
  )
}

let styles = {
  border: '2px solid red',
  borderRadius: '10px ',
  padding: '10px ',
  margin: '10px '
};
let Person1 = (props) => {
  return (
    <div style={styles}>
      <h3>name : {props.name}</h3>
      <p>age : {props.age}</p>
    </div>
  )
}
let Person2 = ({ name, age }) => {
  return (
    <div style={{
      border: '2px solid white',
      borderRadius: '10px ',
      padding: '10px ',
      margin: '10px '
    }}>
      <h3>name : {name}</h3>
      <p>age : {age}</p>
    </div>
  )
}

export default App
