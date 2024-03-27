let carros = []
const inmodelo = document.getElementById('inModelo')
const inPreco = document.getElementById('inPreco')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnFiltrar = document.getElementById('btnFiltrar')

const outLista = document.getElementById('outLista')

const adicionarcarro = () =>{
    const modelo = inmodelo.value
    const preco = Number(inmodelo.value)
    debugger
    if (modelo === '' || preco === 0 || isNaN(preco)) {
        alert('digite os valores correto')
        return
    } 
    carros.push({modelo: modelo, preco: preco})
    console.log(carros)
}

btnAdicionar.addEventListener('click', adicionarcarro)

