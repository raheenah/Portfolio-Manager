import { NavLink } from "react-router-dom";
import Logo from "../assets/logo (3).png";
import { useState } from "react";
import CustomLocalStorage from "../UserData/LocalStorage";

const CreateUserPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const [username, setUsername] = useState("")


  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handleCreateUser = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    console.log(emailRegex.test(email));
    if (email === null) {
      alert("Email field cannot be empty!");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
    } else {
      if (!passwordRegex.test(password)) {
        alert(
          "Password must be at least 8 characters long, contain both uppercase and lowercase letters, a number, and a special character."
        );
        return;
      } else {
        if (password != confirmPassword) {
          alert("Please confirm your chosen password");
        }
        else if (username === "") {
          alert("Please input a username")
        }
        else {
          const userDetails = {
            email: email,
            username: username,
            password: password,
          };
          console.log(userDetails);
          CustomLocalStorage.set("user", userDetails);
        }
      }
    }
  };

  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen bg-background '>
      <div className='bg-cardBorder rounded-lg w-[50%] max-w-[400px] flex flex-col items-center px-3 py-6 gap-2'>
        <img src={Logo} alt='Logo' className='w-16 h-16 mx-' />
        <h1 className='font-extrabold text-xl text-primaryText'>
          Create your User
        </h1>
        <form className='flex flex-col gap-3 items-center w-full'>
          <div className='w-full flex flex-col gap-1'>
            <label className='font-extrabold text-primaryText'>Email</label>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className='bg-inputBackground w-full rounded-full h-10 focus:outline-none p-3 focus:border-b-2  focus:border-b-buttonSecondary'
            />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <label className='font-extrabold text-primaryText'>Username</label>
            <input
              type='text'
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              className='bg-inputBackground w-full rounded-full h-10 focus:outline-none p-3 focus:border-b-2  focus:border-b-buttonSecondary'
            />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <label className='font-extrabold text-primaryText'>Password</label>
            <input
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-inputBackground w-full rounded-full h-10 focus:outline-none p-3 focus:border-b-2  focus:border-b-buttonSecondary'
            />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <label className='font-extrabold text-primaryText'>
              Confirm Password
            </label>
            <input
              type='password'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='bg-inputBackground w-full rounded-full h-10 focus:outline-none p-3 focus:border-b-2  focus:border-b-buttonSecondary'
            />
          </div>
          <button
            aria-label='Login'
            onClick={handleCreateUser}
            className='bg-buttonSecondary mt-2 hover:bg-buttonSecondaryHover text-inputBackground font-bold w-fit px-4 rounded-full h-10 '
          >
            Create Account
          </button>
        </form>
      </div>
      <p>
        Already have an account?&nbsp;
        <NavLink
          to={"/login"}
          className='text-buttonSecondary hover:text-buttonSecondaryHover font-bold'
        >
          Log in
        </NavLink>
      </p>
    </div>
  );
};

export default CreateUserPage;
