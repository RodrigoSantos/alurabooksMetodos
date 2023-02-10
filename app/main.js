let livros = []
const enpointDaApi = 'https://raw.githubusercontent.com/guilhermeonrails/casadocodigo/main/livros.json'
getBuscaLivrosDaAPI()

async function getBuscaLivrosDaAPI(){
    const response = await fetch(enpointDaApi)
    livros = await response.json()
    //console.log(livros)
    //exibirOsLivrosNaTela(livros)     
    let livrosComDesconto = aplicarDesconto(livros)
    //console.log('livros') 
    //console.log(livrosComDesconto)

    exibirOsLivrosNaTela(livrosComDesconto)
    //console.log(livros) 
    //console.table(livros) 
    //console.log(livros[1]) 
}