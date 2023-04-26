class UserService {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    throw 'You are not allowed to get password';
  }

  static authenticateUser(username, password) {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.open('GET', `https://examples.com/api/user/authenticate?username=${username}&password=${password}`, true);
      xhr.responseType = 'json';

      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(true);
        } else {
          reject(xhr.response);
        }
      };

      xhr.onerror = function() {
        reject('Network Error');
      };

      xhr.send();
    });
  }
}

$('form #login').click(function() {
  const username = $('#username').val();
  const password = $('#password').val();

  new UserService.authenticateUser(username, password)
    .then(() => {
      document.location.href = '/home';
    })
    .catch((error) => {
      alert(error);
    });
});
