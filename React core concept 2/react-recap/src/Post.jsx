export default function Post({ post }) {
    let { title, body } = post;
    return (
        <div style={{
            border: '2px solid tomato',
            padding: '10px',
            margin: '10px ',
            width: '650px'
        }}>
            <p>title :{title} </p>
            <p>body :{body} </p>
        </div>
    )
}