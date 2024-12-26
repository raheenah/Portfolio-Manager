import { useState } from "react";
import "./App.css";
// import LoginPage from './pages/Login.jsx'
import CreateUserPage from "./pages/CreateUser.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { UserProvider } from "./components/UserContext.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/create-user' element={<CreateUserPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/:username' element={<Dashboard />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
