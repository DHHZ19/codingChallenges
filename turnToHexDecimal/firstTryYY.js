
// checks if length of toString(16) is two IF not THEN add a zero infront
function colorOf(r,g,b){
    return `#${r.toString(16).length == '0'.length ? '0' + r.toString(16) : r.toString(16)}${g.toString(16).length == '0'.length ? '0' + g.toString(16) : g.toString(16)}${b.toString(16).length == '0'.length ? '0' + b.toString(16) : b.toString(16)}`
  }
  