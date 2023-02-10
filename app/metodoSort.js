let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarlivrosPorPreco)

function ordenarlivrosPorPreco(){
    let livrosOrdenados=livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)    
}



/* let precos = [29.98,11,101,110] 
let precosOrdenados  = preco.sort(function(a,b){
    return a - b    
})
console.log(precosOrdenados)
*/


/* let precos = [29.98,11,101,110] 
let precosOrdenados  = preco.sort((a,b) => {
    return a - b    
})
console.log(precosOrdenados)
*/