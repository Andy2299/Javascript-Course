class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === 'admin' && this.password === 'passwd') {
      alert('User logged in');
    } else {
      alert('User or password incorrect');
    }
  }
}

let login = new Login('admin', 'passwd');
login.login(); // alert -> User logged in

let logbad = new Login('pepe', 'bad');
logbad.login(); // alert -> User or password incorrect


