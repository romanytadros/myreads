import Bookselect from "./BookSelect";
import "../App.css";
function Book({ booko: { id, title, authors, shelf }, ifsearch }) {
  return (
    <>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url("http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api")`,
            }}
          ></div>
          <Bookselect shelfo={shelf} bkid={id} ifsearch={ifsearch} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(" , ")}</div>
      </div>
    </>
  );
}
export default Book;
