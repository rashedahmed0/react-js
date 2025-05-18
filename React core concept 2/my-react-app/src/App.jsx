import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Player from './Player';
import Users from './Users';

function App() {
  // function clickHandle() {
  //   alert('button clicked')
  // }

  // let clickEvent2 = () => alert("second button clicked ")
  // let add5 = (num) => alert(num + 5);



  function clickEvent() {
    alert('button clicked')
  }

  let clickEvent2 = () => alert('second button clicked ')
  let add5 = (a) => alert(a + 5);


  return (
    <>
      <h3>React Core concept </h3>
      <Friends></Friends>
      <Users></Users>

      <Player></Player>

      <Counter></Counter>


      <button onClick={clickEvent}>click me </button>
      <button onClick={clickEvent2}>click me2 </button>
      <button onClick={() => alert('third button clicked ')}>click me 3</button>
      <button onClick={() => add5(10)}>add 5</button>







      {/* <button onClick={clickHandle}>Click me </button>
      <button onClick={clickEvent2}>Click me 2 </button>
      <button onClick={() => alert('third button clicked ')}>Click me 3 </button>
      <button onClick={() => add5(10)}>add 5</button> */}


    </>
  )
}

export default App
