import './index.css';
import img1 from './images/book1.jpg';
import img2 from './images/book2.jpg';
import img3 from './images/book3.jpg';
import Book from './Book';

export const books = [
    {
        id: 1,
        author: 'David Goggins',
        title: 'Never Finished',
        img: img3
    },
    {
        id: 2,
        author: 'Ashleigh Evans',
        title: 'Man with No Yesterdays',
        img: img2
      },
    {
        id: 3,
        author: 'Kai Bird',
        title: 'Openheimer',
        img: img1
      }
];

const BookList = () => {
    return (
    <> {/* <> </> This is a React fragment.
        It is necessary when '*/}
        <h1 className='PageTitle'> Best Selling Books </h1>
        <section className='BookList'>
        {/* Here, index is a keyword argument to the*/}
        {books.map((book,index) => {
            return <Book {...book} key={book.id} number={index}/>
        })}
    </section>
    </>
    )
}

export default BookList;