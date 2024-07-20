class Auth {
  constructor(login) {
    this.isLoggedIn = localStorage.getItem("eduToken") ? true : false;
  }
  logIn() {
    this.isLoggedIn = true;
  }
  logOut() {
    this.isLoggedIn = false;
  }
}
const auth = new Auth();
console.log(auth.isLoggedIn, "isLoggedIn");
export default auth;
