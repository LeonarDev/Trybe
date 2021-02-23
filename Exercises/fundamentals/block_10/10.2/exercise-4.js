// The code below searches a user's GitHub, according to the URL, their repositories, and returns a list as a result. 
// Given the URL 'https://api.github.com/orgs/tryber/repos', do a test to verify that the' sd-01-week4-5-project-todo-list 'and' sd-01- week4-5-project-meme-generator 'are on that list.

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

module.exports = getRepos;