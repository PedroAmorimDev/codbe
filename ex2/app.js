//entrada
const inNumber = document.getElementById('inNumero')
//ações
const btnApostar = document.getElementById('btnApostar')
const btnReiniciar = document.getElementById('btnJogar')
//saidas
const outDica = document.getElementById('outDica')
const outErros = document.getElementById('outErros')
const arrayErros = []
const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1;
const tentativas = 6
console.log(sorteado)

const apostarNumero = () => {
    const numero = Number(inNumber.value)

    if (numero === 0 || isNaN(numero)) {
        window.alert('invalido seu numero, jovem')
        return
    }

    if (numero === sorteado) {
        outDica.textContent = 'você acertou'
        btnApostar.disabled = true
    } else {
        arrayErros.push(numero)
        outErros.textContent = `(${arrayErros} )`
        arrayErros.forEach((indice) => {
            if (indice === numero) {
                window.alert('vai repetir o mesmo numero sabendo que tá errado, tipico de vocÊ')
            }

        })
    }
};

btnApostar.addEventListener('click', apostarNumero);

const jogarDnv = () => { window.location.reload() };

btnReiniciar.addEventListener('click', jogarDnv);