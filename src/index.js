import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './Books';
import Book from './Book';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);

