/** @format */
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './pages/Home/Home'
import "./styles/main.scss";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
         <Topbar />
         <Home />
      </div>
    </div>
  );
}

export default App;
