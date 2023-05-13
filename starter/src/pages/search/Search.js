/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../../components/book/Book";
import * as BooksApi from "../../BooksAPI";
const Search = (props) => {
  const lstMainBook = props.books;
  const [lstSearchBook, setLstSearchBook] = useState([]);

  const onChangeSearchInput = async (e) => {
    const lstBookFound = await searchBooks(e.target.value, 10);
    const books = lstBookFound?.map((bookFound) => {
      const filteredBook = lstMainBook?.filter(
        (book) => bookFound.id === book.id
      );
      return { ...bookFound, shelf: filteredBook[0]?.shelf ?? "none" };
    });
    if (books && books.items) {
      setLstSearchBook(books.items);
    } else {
      setLstSearchBook(books ?? []);
    }
  };

  const searchBooks = async (query) => {
    const result = await BooksApi.search(query, 10);
    if (result && result.items) {
      return result.items;
    } else {
      return result ?? [];
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {lstSearchBook?.map((book) => {
            return (
              <li key={book?.id}>
                <Book book={book} onChangeBookStatus={props.onChangeStatus} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
