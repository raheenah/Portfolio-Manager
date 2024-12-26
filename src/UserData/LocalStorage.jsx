export default class CustomLocalStorage {
  static set(key, value) {
    const currentUserList = JSON.parse(localStorage.getItem(key)) || [];
    // console.log(currentUserList, "currentlis");
    const emailExists = currentUserList.some(
      (user) => user.email === value.email
    );
    const usernameExists = currentUserList.some(
      (user) => user.username === value.username
    );
    if (emailExists) {
      alert("This email is already registered!");
    } else if (usernameExists) {
      alert(
        "Tis username has already been registered, please select a different username"
      );
    } else {
      const updatedUserList = [...currentUserList, value];
      console.log(updatedUserList, "updatedlist");
      localStorage.setItem(key, JSON.stringify(updatedUserList));
    }
  }

  static get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  static setCurrentUser(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeCurrentUser(key) {
    localStorage.removeItem(key);
  }

  static getCurrentUser(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
