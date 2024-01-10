import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componends/Home';
import Create from './Componends/Create';
import Update from './Componends/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
