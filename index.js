const app = "I don't do much.";
const token = 'your token goes here'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json())
  .then(json => console.log(json));
