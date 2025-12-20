import "./style.css";

window.onload = function () {
  const pronoun = ['the', 'our', 'your'];
  const adj = ['great', 'cute', 'majestic'];
  const noun = ['bunny', 'rainbow', 'unicorn'];
  const extensions = ['.com', '.net', '.io'];

  const pronounList = document.getElementById('pronoun-list');
  const adjList = document.getElementById('adj-list');
  const nounList = document.getElementById('noun-list');
  const extensionsList = document.getElementById('extensions-list');
  const domainList = document.getElementById('domain-list');
  const domainCount = document.getElementById('domain-count');

  function fillList(element, array) {
    element.innerHTML = ''; 
    array.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      element.appendChild(li);
    });
  }

  fillList(pronounList, pronoun);
  fillList(adjList, adj);
  fillList(nounList, noun);
  fillList(extensionsList, extensions);

  let count = 0;
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extensions.length; e++) {
          const domain = pronoun[p] + adj[a] + noun[n] + extensions[e];

          const li = document.createElement('li');
          li.textContent = domain;
          domainList.appendChild(li);
          count++;
        }
      }
    }
  }

};