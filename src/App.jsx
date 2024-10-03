import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContents from "./components/Maincontents/MainContents";

function App() {
  return <div className="container">
    <Sidebar/>
              <MainContents/>
  </div>;
}

export default App;
