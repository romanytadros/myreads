import { useEffect, useRef } from "react";
import "../App.css";
import { update } from "../BooksAPI";
import { useDispatch, useSelector } from "react-redux";
import { currentlyReading, wantToRead, read } from "../store/action";

function Bookselect(shelfo, bookid, ifsearch) {
  const bookselect = useRef(null);
  const curread = useSelector((state) => state.currentlyReading);
  const wantread = useSelector((state) => state.wantToRead);
  const readed = useSelector((state) => state.read);
  const bookLst = useSelector((state) => state.booklist);

  const dispatch = useDispatch();

  useEffect(() => {
    if (shelfo.ifsearch) {
      setTimeout(() => {
        const curbk = bookLst.filter((book) => book.id === shelfo.bkid);

        if (curbk.length > 0) {
          if (curbk[0].shelf === "currentlyReading") {
            bookselect.current[1].selected = true;
            bookselect.current[1].innerHTML = "√ currentlyReading";
            bookselect.current[4].innerHTML = "none";
            bookselect.current[2].innerHTML = "wantToRead";
            bookselect.current[3].innerHTML = "read";
          }
          if (curbk[0].shelf === "wantToRead") {
            bookselect.current[2].selected = true;
            bookselect.current[2].innerHTML = "√ wantToRead";
            bookselect.current[4].innerHTML = "none";
            bookselect.current[1].innerHTML = "currentlyReading";
            bookselect.current[3].innerHTML = "read";
          }
          if (curbk[0].shelf === "read") {
            bookselect.current[3].selected = true;
            bookselect.current[3].innerHTML = "√ read";
            bookselect.current[4].innerHTML = "none";
            bookselect.current[1].innerHTML = "currentlyReading";
            bookselect.current[2].innerHTML = "wantToRead";
          }
        } else {
          if (bookselect) {
            bookselect.current[4].selected = true;
            bookselect.current[4].innerHTML = "√ none";
            bookselect.current[1].innerHTML = "currentlyReading";
            bookselect.current[2].innerHTML = "wantToRead";
            bookselect.current[3].innerHTML = "read";
          }
        }
      }, 10);
    } else {
      if (bookselect.current.value === "currentlyReading") {
        bookselect.current[1].innerHTML = "√ currentlyReading";
      }
      if (bookselect.current.value === "wantToRead") {
        bookselect.current[2].innerHTML = "√ wantToRead";
      }

      if (bookselect.current.value === "read") {
        bookselect.current[3].innerHTML = "√ read";
      }
    }
  }, [bookLst, shelfo]);

  function setselectstate(e) {
    setTimeout(() => {
      if (e.target.value === "currentlyReading") {
        e.target[1].innerHTML = "√ currentlyReading";
      }
      if (e.target.value === "wantToRead") {
        e.target[2].innerHTML = "√ wantToRead";
      }

      if (e.target.value === "read") {
        e.target[3].innerHTML = "√ read";
      }
      if (e.target.value === "none") {
        e.target[4].innerHTML = "√ none";
      }
    }, 300);
  }
  function changebk(st, no) {
    // if(st !== "none"){
    document.getElementsByName(shelfo.bkid)[0].value = st;
    document.getElementsByName(shelfo.bkid)[0][no].innerHTML = "√ " + st;
    switch (st) {
      case "currentlyReading":
        document.getElementsByName(shelfo.bkid)[0][2].innerHTML = "wantToRead";
        document.getElementsByName(shelfo.bkid)[0][3].innerHTML = "read";
        document.getElementsByName(shelfo.bkid)[0][4].innerHTML = "none";
        break;
      case "wantToRead":
        document.getElementsByName(shelfo.bkid)[0][1].innerHTML =
          "currentlyReading";
        document.getElementsByName(shelfo.bkid)[0][3].innerHTML = "read";
        document.getElementsByName(shelfo.bkid)[0][4].innerHTML = "none";
        break;
      case "read":
        document.getElementsByName(shelfo.bkid)[0][1].innerHTML =
          "currentlyReading";
        document.getElementsByName(shelfo.bkid)[0][2].innerHTML = "wantToRead";
        document.getElementsByName(shelfo.bkid)[0][4].innerHTML = "none";
        break;
      case "none":
        document.getElementsByName(shelfo.bkid)[0][1].innerHTML =
          "currentlyReading";
        document.getElementsByName(shelfo.bkid)[0][2].innerHTML = "wantToRead";
        document.getElementsByName(shelfo.bkid)[0][3].innerHTML = "read";
        break;
      default:
        break;
      //  }
    }
  }

  function changebookstate() {
    if (bookselect.current.value === "none") {
      dispatch(wantToRead(wantread.filter((book) => book.id !== shelfo.bkid)));
      dispatch(read(readed.filter((book) => book.id !== shelfo.bkid)));
      dispatch(
        currentlyReading(curread.filter((book) => book.id !== shelfo.bkid))
      );

      update(shelfo.bkid, "none");
      if (shelfo.ifsearch) {
        setTimeout(() => {
          changebk("none", 4);
        }, 300);
      }
    }
    if (bookselect.current.value === "currentlyReading") {
      setTimeout(() => {
        changebk("currentlyReading", 1);
      }, 300);
      if (curread.filter((book) => book.id === shelfo.bkid).length === 0) {
        dispatch(
          wantToRead(wantread.filter((book) => book.id !== shelfo.bkid))
        );
        dispatch(read(readed.filter((book) => book.id !== shelfo.bkid)));
        dispatch(
          currentlyReading(
            curread.concat(bookLst.filter((book) => book.id === shelfo.bkid))
          )
        );

        update(shelfo.bkid, "currentlyReading");
      }
    }
    if (bookselect.current.value === "wantToRead") {
      setTimeout(() => {
        changebk("wantToRead", 2);
      }, 300);
      if (wantread.filter((book) => book.id === shelfo.bkid).length === 0) {
        dispatch(
          currentlyReading(curread.filter((book) => book.id !== shelfo.bkid))
        );
        dispatch(read(readed.filter((book) => book.id !== shelfo.bkid)));
        dispatch(
          wantToRead(
            wantread.concat(bookLst.filter((book) => book.id === shelfo.bkid))
          )
        );

        update(shelfo.bkid, "wantToRead");
      }
    }
    if (bookselect.current.value === "read") {
      setTimeout(() => {
        changebk("read", 3);
      }, 300);
      if (readed.filter((book) => book.id === shelfo.bkid).length === 0) {
        dispatch(
          currentlyReading(curread.filter((book) => book.id !== shelfo.bkid))
        );
        dispatch(
          wantToRead(wantread.filter((book) => book.id !== shelfo.bkid))
        );
        dispatch(
          read(readed.concat(bookLst.filter((book) => book.id === shelfo.bkid)))
        );

        update(shelfo.bkid, "read");
      }
    }
  }
  return (
    <div className="book-shelf-changer">
      <select
        value={shelfo.shelfo}
        name={shelfo.bkid}
        ref={bookselect}
        onChange={(e) => {
          changebookstate(e);
          setselectstate(e);
        }}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
export default Bookselect;
