import "./App.css";
import MainLib from "./pages/MainLib";
import Search from "./pages/Search";
import "./BooksAPI";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path={"/"} component={MainLib} />
          <Route exact path={"/search"} component={Search} />
          <Route exact path={"*"} component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
