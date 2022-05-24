// Import stylesheets
import './style.css';
import axios from 'axios';

let data = null;

window.fetchData = function fetchData() {
  axios.get('https://jsonplaceholder.typicode.com/todos').then(({ data }) => {
    console.log(data);
    // render(JSON.stringify(json));
  });
};

function render(listData) {
  console.log(listData);
  // document.querySelector('pre').innerHTML = list.toString();
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
  <h1>JS Starter</h1>

  <button type="button" onclick="fetchData()">fetch data</button>

  <pre></pre>
`;
