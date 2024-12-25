import { useState } from "react";
import "./App.css";
// import LoginPage from './pages/Login.jsx'
import CreateUserPage from "./pages/CreateUser.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/create-user' element={<CreateUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
