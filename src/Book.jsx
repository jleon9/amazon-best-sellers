import './index.css';

const Book = (props) => {
    const {img, title, author, number} = props
    return (
    <article className='Book'>
        <img src={img} alt={title}/>
        <h1>{title}</h1>
        <h2 className='Author'>{author}</h2>
        <span className='number'>{`# ${number + 1}`}</span>
    </article>)
}
export default Book;