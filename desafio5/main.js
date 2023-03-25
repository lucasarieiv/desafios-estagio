let word = 'avaro';
let reversed = '';

 
for (let index = word.length; index > 0; index--) {
  reversed += word[index - 1]
}

console.log(reversed);