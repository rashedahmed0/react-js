export default function Handls() {
    function eventHandle() {
        alert('button clicked')
    }
    let eventHandle2 = () => {
        alert('second button clicked')
    }
    let add5 = (a) => {
        alert(a + 5)
    }
    return (
        <div>
            <button onClick={eventHandle}>click me </button>
            <button onClick={eventHandle2}>click me2 </button>
            <button onClick={() => { add5(5) }}>add 5 </button>
        </div>
    )
}