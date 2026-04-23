const precoLivros = require("./listalivros");

function menorValor(arrprodutos, pocicaoInicial){
   let maisBarato = pocicaoInicial; 

for (let atual = pocicaoInicial; atual < arrprodutos.length; atual++) 
   if (arrprodutos [atual].preco < arrprodutos[maisBarato].preco) {

}
   return maisBarato;
}
 
module.exports = menorValor;