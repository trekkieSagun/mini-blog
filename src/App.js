import "./App.css";
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
