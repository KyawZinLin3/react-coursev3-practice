import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    img: "https://m.media-amazon.com/images/I/913C+MR3S5L._SL1500_.jpg",
    author: "Kristin Hannah",
    title: "The Women: A Novel",
    id: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/81RrEEMiOCL._SL1500_.jpg",
    author: " Sarah J. Maas",
    title: "A Court of Thorns and Roses",
    id: 2,
  },
  {
    img: "https://m.media-amazon.com/images/I/71TRUbzcvaL._SL1500_.jpg",
    author: " Morgan Housel ",
    title:
      "The Psychology of Money: Timeless lessons on wealth, greed, and happiness",
    id: 3,
  },
];

function BookList() {
  const getBookById = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        //console.log(book);

        return <Book {...book} key={book.id} getBookById={getBookById} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, author, title, getBookById, id } = props;

  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <button onClick={() => getBookById(id)}>Get Book</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
