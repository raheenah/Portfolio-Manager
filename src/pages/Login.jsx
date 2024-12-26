import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import Logo from "../assets/logo (3).png";
import { useState } from "react";
import CustomLocalStorage from "../UserData/LocalStorage";
import { useUser } from "../components/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = (event, email, password) => {
    event.preventDefault();

    const authenticateUser = (email, password) => {
      const userList = JSON.parse(localStorage.getItem("user")) || [];

      return userList.find(
        (user) => user.email === email && user.password === password

      );
            // setUsername(user.username);
      };
      const userLoggedIn = authenticateUser(email, password)
              setUsername(userLoggedIn.username);


    if (userLoggedIn) {
        // alert("login Successful")
        login(userLoggedIn)
        // CustomLocalStorage.setCurrentUser("CurrentUser", userLoggedIn)
            //   setUsername(user.username);

      navigate(`/${userLoggedIn.username}`);
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen bg-background '>
      <div className='bg-cardBorder rounded-lg w-[50%] max-w-[400px] flex flex-col items-center px-3 py-6 gap-2'>
        <img src={Logo} alt='Logo' className='w-16 h-16 mx-' />
        <h1 className='font-extrabold text-xl text-primaryText'>
          Login to your Account
        </h1>
        <form
          onSubmit={handleLogin}
          className='flex flex-col gap-3 items-center w-full'
        >
          <div className='w-full flex flex-col gap-1'>
            <label className='font-extrabold text-primaryText'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-inputBackground w-full rounded-full h-10 focus:outline-none p-3 focus:border-b-2  focus:border-b-buttonSecondary'
            />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <label className='font-extrabold text-primaryText'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-inputBackground w-full rounded-full h-10 focus:outline-none p-3 focus:border-b-2  focus:border-b-buttonSecondary'
            />
          </div>

          <button
            aria-label='Login'
            type='submit'
            onClick={handleLogin}
            className='bg-buttonSecondary mt-2 hover:bg-buttonSecondaryHover text-inputBackground font-bold w-fit px-4 rounded-full h-10 '
          >
            Login
          </button>
        </form>
      </div>
      <p>
        Don't have an account?&nbsp;
        <NavLink
          to={"/create-user"}
          className='text-buttonSecondary hover:text-buttonSecondaryHover font-bold'
        >
          Create an Account
        </NavLink>
      </p>
    </div>
  );
};

export default LoginPage;
