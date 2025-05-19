export default function Student({ student }) {
    console.log(student);
    return (
        <div>
            <p>name: {student.name}</p>
            <p>age : {student.age}</p>
        </div>
    )
}