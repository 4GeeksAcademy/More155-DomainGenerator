import "./style.css";

let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'cute', 'majestic'];
let noun = ['bunny', 'rainbow', 'unicorn'];
let extensions = ['.com', '.net', '.io'];

window.onload = function () {
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

  function generateDomains() {
    domainList.innerHTML = '';
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
    if (domainCount) domainCount.textContent = `${count} domains generated`;
  }

  fillList(pronounList, pronoun);
  fillList(adjList, adj);
  fillList(nounList, noun);
  fillList(extensionsList, extensions);

  generateDomains();
};

function addWord(category) {
  let input, array;
  if (category === 'pronoun') {
    input = document.getElementById('input-pronoun');
    array = pronoun;
  } else if (category === 'adj') {
    input = document.getElementById('input-adj');
    array = adj;
  } else if (category === 'noun') {
    input = document.getElementById('input-noun');
    array = noun;
  } else if (category === 'ext') {
    input = document.getElementById('input-ext');
    array = extensions;
  }

  const value = input.value.trim().toLowerCase();
  if (value) {
    if (array.includes(value)) {
      alert(`"${value}" is already in the list!`);
    } else {
      array.push(value);
     
      document.getElementById(
        category === 'ext' ? 'extensions-list' : category + '-list'
      ).innerHTML = '';
      array.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        document.getElementById(
          category === 'ext' ? 'extensions-list' : category + '-list'
        ).appendChild(li);
      });

      const domainList = document.getElementById('domain-list');
      const domainCount = document.getElementById('domain-count');
      domainList.innerHTML = '';
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
      if (domainCount) domainCount.textContent = `${count} domains generated`;
    }
    input.value = '';
  }
}

window.addWord = addWord;