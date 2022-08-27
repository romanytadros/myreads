import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <p className="fs-3"> 404</p>
          <p className="fs-1"> Page not found</p>

          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
