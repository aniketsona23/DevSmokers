import Login from "./components/Login";
import "./index.css"
import Home from "./components/Home";
import ViewAppPopup from "./components/faculty/viewApp";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  return (
    <div className="App">
      <Home role={"faculty"}/>
    </div>
  );
}

export default App;
