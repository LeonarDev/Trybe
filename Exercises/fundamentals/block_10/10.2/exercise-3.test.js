const getUserName = require('./exercise-3');

describe('getUserName - async/await', () => {
  it('when the user id exists: returns the user name', async () => {
    expect.assertions(1);
    const data = await getUserName(4);
    expect(data).toEqual('Mark');
  });

  it('when the user id does not exists: returns an error', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    }
  });
});
