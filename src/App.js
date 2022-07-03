import Home from "./pages/Home";
import Register from "./pages/Register";
import { Route, Routes, BrowserRouter  } from 'react-router-dom'  

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
