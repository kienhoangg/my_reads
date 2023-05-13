/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import BookShelf from "../../components/bookShelf/BookShelf";
import { Link } from "react-router-dom";
const Home = (props) => {
  const { books, onChangeStatus } = props;

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              books={books.filter((book) => book.shelf === "currentlyReading")}
              onStatusChange={onChangeStatus}
            />
            <BookShelf
              title="Want to Read"
              books={books.filter((book) => book.shelf === "wantToRead")}
              onStatusChange={onChangeStatus}
            />
            <BookShelf
              title="Read"
              books={books.filter((book) => book.shelf === "read")}
              onStatusChange={onChangeStatus}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"> Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
