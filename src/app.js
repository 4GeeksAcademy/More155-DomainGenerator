import "./style.css";

const data = {
  pronoun: { array: ['the', 'our', 'your'], id: 'pronoun-list', inputId: 'input-pronoun' },
  adj: { array: ['great', 'cute', 'majestic'], id: 'adj-list', inputId: 'input-adj' },
  noun: { array: ['bunny', 'rainbow', 'unicorn'], id: 'noun-list', inputId: 'input-noun' },
  ext: { array: ['.com', '.net', '.io'], id: 'extensions-list', inputId: 'input-ext' }
};

const domainList = document.getElementById('domain-list');
const domainCount = document.getElementById('domain-count');

function updateList(category) {
  const { array, id } = data[category];
  const ul = document.getElementById(id);
  ul.innerHTML = '';
  array.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}

function generateDomains() {
  domainList.innerHTML = '';
  let count = 0;
  const [pronouns, adjs, nouns, exts] = Object.values(data).map(d => d.array);
  
  for (const p of pronouns)
  for (const a of adjs)
  for (const n of nouns)
  for (const e of exts) {
    const li = document.createElement('li');
    li.textContent = p + a + n + e;
    domainList.appendChild(li);
    count++;
  }
  
  if (domainCount) domainCount.textContent = `${count} domains generated`;
  setupDeleteButtons();
}

function addWord(category) {
  const { inputId, array } = data[category];
  const input = document.getElementById(inputId);
  const value = input.value.trim().toLowerCase();
  
  if (value && !array.includes(value)) {
    array.push(value);
    updateList(category);
    generateDomains();
  }
  input.value = '';
}
window.addWord = addWord;

function setupDeleteButtons() {
  Object.keys(data).forEach(cat => {
    const { array, id } = data[cat];
    const ul = document.getElementById(id);
    Array.from(ul.children).forEach(li => {
      if (li.querySelector('.delete-btn')) return;
      
      const text = li.textContent.trim();
      const btn = document.createElement('span');
      btn.className = 'delete-btn';
      btn.textContent = ' ×';
      
      btn.onclick = () => {
        const i = array.indexOf(text.toLowerCase());
        if (i > -1) array.splice(i, 1);
        updateList(cat);
        generateDomains();
      };
      li.appendChild(btn);
    });
  });
}

window.onload = () => {
  Object.keys(data).forEach(updateList);
  generateDomains();
};