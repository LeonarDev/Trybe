const getUserName = require('./exercise-2');

describe('getUserName - promise', () => {
  test('when the user id exists: returns the user name', () => {
    expect.assertions(1);
    return getUserName(4).then(data => expect(data).toEqual('Mark'));
  });
  
  test('when the user id does not exists: returns an error', () => {
    expect.assertions(1);
    return getUserName(3).catch(error => expect(error).toEqual({ error: 'User with 3 not found.' }))
  });
});
