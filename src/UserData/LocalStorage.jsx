export default class CustomLocalStorage {
  

    static set(key, value) {
        const currentUserList = JSON.parse(localStorage.getItem(key)) || []
        console.log(currentUserList, "currentlis")
        const emailExists = currentUserList.some((user) => user.email === value.email);
        if (emailExists) {
            alert("This email is already registered!")
        }

       else{ const updatedUserList = [...currentUserList, value]
console.log(updatedUserList, "updatedlist")
      localStorage.setItem(key, JSON.stringify(updatedUserList));}
    }


}
