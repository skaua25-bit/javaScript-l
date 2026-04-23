const livros = require('./listalivros'); 
const menorValor = require('./menorValor');

                 //1
for (let atual = 0; atual < livros.length; atual++) {
 let menor = menorValor(livros, atual)  
console.log('menor preço', livros[menor]);
 let livroAtual = livros[atual];
 console.log('livro atual', livros[atual]);
let livroMenorPreco = livros[menor];
console.log('livro atual', livros[atual]);

livros[atual] = livroMenorPreco
livros[menor] = livroAtual
 }

 console.log(livros)