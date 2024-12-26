import { createContext, useState, useContext } from "react";
import CustomLocalStorage from "../UserData/LocalStorage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Function to set the user
  const login = (user) => {
    setCurrentUser(user);

    CustomLocalStorage.setCurrentUser("currentUser", JSON.stringify(user)); // Optional: Save to localStorage
  };

  const logout = () => {
    setCurrentUser(null);

    CustomLocalStorage.removeCurrentUser("currentUser"); // Optional: Remove from localStorage
  };

  return (
    <UserContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
