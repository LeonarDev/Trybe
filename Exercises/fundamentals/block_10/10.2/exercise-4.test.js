const getRepos = require('./exercise-4');

describe('Verify repositories', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  test('if "sd-01-week4-5-project-todo-list" exists', () => {
    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
    });
  });
  test('if "sd-01-week4-5-project-meme-generator" exists', () => {
    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
})