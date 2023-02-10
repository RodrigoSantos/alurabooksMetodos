const botoes = document.querySelectorAll('.btn') //Pega todas as classes que tem BTN
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros)) // Cria um FOR para cada btn dentro do for ele executa a função

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id) // Pego o ID do livro que estiver dentro fo for no momento 
    const categoria= elementoBtn.value // Pega o valor do ID
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorLivrosDisponiveis() : filtrarPorCategorias(categoria)
    //console.table(livrosFiltrados)//Exeibe no console em forma de tabela
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){        
        const valorTotal = calcularValorTotalDeLivrosDiscponiveis(livrosFiltrados)        
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}
function filtrarPorCategorias(categoria) {//Filta a lista dentro de livros somente pela variavel que recebeu
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorLivrosDisponiveis() {//Filtra por livros com quantidade positiva
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>    `

}



