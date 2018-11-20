'use strict';
const http = new EasyHTTP();

// Get users GET
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
};

// Create user POST
// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update user PUT
// http
//   .put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete users DELETE
// http
//   .delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
