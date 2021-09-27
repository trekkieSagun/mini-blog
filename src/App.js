import "./App.css";
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
