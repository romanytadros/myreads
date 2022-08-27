import Book from "./Book";
import "../App.css";
import { getAll } from "../BooksAPI";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  bookList,
  isBusy,
  currentlyReading,
  wantToRead,
  read,
} from "../store/action";
import { BallTriangle } from "react-loader-spinner";

function BookShelf(bookinfo) {
  const dispatch = useDispatch();
  //  const [booklistato,setBooklistato] = useState([]);
  const isBsy = useSelector((state) => state.isbusy);
  const curread = useSelector((state) => state.currentlyReading);
  const wantread = useSelector((state) => state.wantToRead);
  const readed = useSelector((state) => state.read);
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];

  useEffect(() => {
    dispatch(isBusy(true));

    getAll().then((data) => {
      dispatch(bookList(data.books));
      // setBooklistato(data.books);

      data.books.map((book) => {
        if (book.shelf === "currentlyReading") {
          arr1.push(book);
        }
        if (book.shelf === "wantToRead") {
          arr2.push(book);
        }
        if (book.shelf === "read") {
          arr3.push(book);
        }
        return book;
      });
      dispatch(currentlyReading(arr1));
      dispatch(wantToRead(arr2));
      dispatch(read(arr3));

      dispatch(isBusy(false));
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {isBsy ? (
        <div className="row d-flex justify-content-center">
          <div className="col-3">
            <BallTriangle />
          </div>
        </div>
      ) : (
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {curread &&
                  curread.map((book, index) => {
                    return (
                      <li key={book.id}>
                        <Book booko={book} key={book.id} />
                      </li>
                    );
                  })}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantread &&
                  wantread.map((book, index) => {
                    return (
                      <li key={book.id}>
                        <Book key={book.id} booko={book} />
                      </li>
                    );
                  })}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {readed &&
                  readed.map((book, index) => {
                    return (
                      <li key={book.id}>
                        <Book key={book.id} booko={book} />
                      </li>
                    );
                  })}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default BookShelf;
