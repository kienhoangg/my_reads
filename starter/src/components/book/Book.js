import React from "react";

import * as BooksApi from "../../BooksAPI";
const Book = (props) => {
  const { book, onChangeBookStatus } = props;
  const onChangeStatus = async (e) => {
    await BooksApi.update(book, e.target.value);
    const newBook = { ...book, shelf: e.target.value };
    onChangeBookStatus(newBook);
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: "url(" + book?.imageLinks?.thumbnail + ")",
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={book?.shelf ?? "none"}
            onChange={onChangeStatus}
          >
            <option value="DEFAULT" disabled>
              {book?.shelf === "none" ? "Add to..." : "Move to..."}
            </option>
            <option value="currentlyReading">Current Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book?.title}</div>
      <div className="book-authors">{book?.authors?.join(", ")}</div>
    </div>
  );
};

export default Book;
