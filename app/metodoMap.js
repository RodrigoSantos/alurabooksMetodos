function aplicarDesconto(livros){
    console.log(livros)
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //pega o livro e copia alterando o preco para
    }) 
 return livrosComDesconto
}
//outra maneira de fazer está função
/*function aplicarDesconto(livros){    
    const desconto = 0.3 
    const livrosComDesconto = [];    

    for (let i = 0; i < livros.length; i++) {
        let livro = livros[i];           
        livro.preco = livro.preco - (livro.preco * desconto);        
        livrosComDesconto.push(livro);
    }    
    return livrosComDesconto;
}*/
    