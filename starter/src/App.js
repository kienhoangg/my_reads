import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/search/Search";
import React, { useEffect, useState } from "react";
import * as BooksApi from "./BooksAPI";
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const response = await BooksApi.getAll();
      setBooks(response);
    };
    getAllBooks();
  }, []);

  const handleChangeStatus = (book) => {
    const lstNewBook = books.map((el) => {
      return el.id === book.id ? book : el;
    });
    setBooks(lstNewBook);
  };
  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home books={books} onChangeStatus={handleChangeStatus} />}
      ></Route>
      <Route
        path="/search"
        element={<Search books={books} onChangeStatus={handleAddBook} />}
      ></Route>
    </Routes>
  );
}

export default App;
