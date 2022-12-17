import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontscrean from './components/Frontscrean';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontscrean />} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
      {/* <Frontscrean/> */}
      {/* <Login /> */}

    </div>
  );
}

export default App;
