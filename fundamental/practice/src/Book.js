const Book = (props) => {
  const { img, author, title } = props;

  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>

      <h4>{author}</h4>
    </article>
  );
};

export default Book;
