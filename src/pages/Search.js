import { Link } from "react-router-dom";
import "../App.css";
import Book from "../components/Book";
import { useRef, useState } from "react";
import { getAll, search } from "../BooksAPI";
import { useDispatch, useSelector } from "react-redux";
import { isBusy2, searchBook } from "../store/action";
import { bookList } from "../store/action";

function Search() {
  const [searchresult, setSearchresult] = useState([]);
  const searchvalue = useRef("");
  const dispatch = useDispatch();
  const isBsy2 = useSelector((state) => state.isbusy2);

  function findbook(e) {
    e.preventDefault();

    dispatch(isBusy2(true));
    setTimeout(() => {
      const search2 = searchvalue.current.value.toLowerCase();
      if (search2 === " " || search2 === "") {
        setSearchresult([]);
        dispatch(searchBook([]));
      } else {
        search(search2.trim(), 30).then((data) => {
          if (data && !data.error) {
            setSearchresult(data);
            dispatch(searchBook(data));
            getAll().then((data) => {
              dispatch(bookList(data.books));
            });
          } else {
            setSearchresult([]);
            dispatch(searchBook([]));
          }
        });
      }
    }, 600);
    dispatch(isBusy2(true));
  }
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/* <form
              // onSubmit={findbook}
              > */}
            <input
              onChange={findbook}
              // defaultValue=" "
              type="text"
              placeholder="Search by title, author, or ISBN"
              ref={searchvalue}
            />
            {/* </form> */}
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {isBsy2 && (
              <>
                {searchresult.length > 0 ? (
                  searchresult.map((book, index) => {
                    return (
                      <li key={book.id}>
                        <Book key={book.id} booko={book} ifsearch={true} />
                      </li>
                    );
                  })
                ) : (
                  <h1>No search results</h1>
                )}
              </>
            )}
          </ol>
        </div>
      </div>
    </>
  );
}
export default Search;
