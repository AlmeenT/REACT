
import About from './components/Home/About/About';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <ClassComponent />
    </div>
  );
}

export default App;
