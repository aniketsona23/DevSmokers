import Login from "./components/Login";
import "./index.css"
import Home from "./components/faculty/home";
import ViewAppPopup from "./components/faculty/viewApp";
import "primereact/resources/themes/lara-light-cyan/theme.css";


function App() {
  return (
    <div className="App">
      <Login />
      {/* <Home /> */}
    </div>
  );
}

export default App;
