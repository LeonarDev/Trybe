// Using the Promise syntax, run a test that checks the result of the getUserName function for the case where the user is found, and also a test for the case where the user is not found.
// Tip: See the false data used in the database, available in the users variable, to know which IDs exist.

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  module.exports = getUserName;
