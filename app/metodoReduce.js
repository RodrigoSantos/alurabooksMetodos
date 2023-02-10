function calcularValorTotalDeLivrosDiscponiveis(livrosDisponiveis){
    return livrosDisponiveis.reduce((acc,livro) => acc + livro.preco, 0).toFixed(2) //Pega todos os livros e aplica a função de reduce, para isso
    //teremos um acumulador e o livro => e ai faz alguma coisa. Vamos omar o acc acumulador com o valor do livro.preco e o primeiro indice será o indice 0

}