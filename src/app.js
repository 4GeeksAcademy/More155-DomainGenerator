import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ['the', 'our', 'your', 'a']
  let adj = ['great', 'big', 'cute', 'magestic']
  let noun = ['duck', 'racoon', 'bunny', 'rainbow', 'unicorn']
  let extensions = ['.com', '.net', '.us', '.io', '.es']

  for (var p = 0; p < pronoun.length; p++) {
    for (var a = 0; a < adj.length; a++) {
      for (var n = 0; n < noun.length; n++) {
        for (var e = 0; e < extensions.length; e++) {
          console.log(pronoun[p] + adj[a] + noun[n] + extensions[e])
        }
      }
    }
  }
}



