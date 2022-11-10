import './App.css';
import AllPage from './Components/Allpage';
// import NavSecond from './Components/NavSecond';
import { Routes, Route } from "react-router-dom";
import { AppProvider } from './Components/Context/ProductContext';
function App() {
  return (
    <div className="App">
      
      <AllPage/>
      
      {/* <NavSecond/> */}
      
    </div>
    
  );
}
export default App;
