

let vida = 3
let resultado = []


let palavra = ""

let score = 0

let acertos = 0




//Sorteador de palavras
function sortear(){

  let dados = {
    animais:["urso","cavalo","leopardo","neko","Cachorro", "Pantera"],
    cidades: ["guarulhos","arujá","itaqua"],
    animes: ["Naruto","Boruto","Gantz","Dorohedoro","Dragonball","FullMetal"],
    objetos: ["Cadeira", "Mesa", "liquidificador", "Escada", "Controle", "Chinelo", "Pote"]
  }
  
  let categoria = ""

  //O que o usuario selecionou?
  let info = JSON.parse(localStorage.info)
  console.log(info)

  if(info.categoria == 'aleatorio'){
    categoria = Object.keys(dados)[Math.floor(Math.random()*Object.keys(dados).length)]

    palavra = dados[categoria][Math.floor(Math.random()*dados[categoria].length)]

  } else {
    categoria = info.categoria
    palavra = dados[categoria][Math.floor(Math.random()*dados[categoria].length)]
  }

  criarDica(categoria)
  palavra = palavra.toUpperCase()
  palavra = palavra.split('')

  console.log(palavra)
  
  
}

sortear()

//criar dica
function criarDica(y) {
  let dica = document.querySelector(".dica")
  dica.textContent = y
}

//criar / atualizar qtd palavra
function setQtdPalavras() {
  let alvo = document.querySelector(".qtd-palavras")
  alvo.textContent = acertos
}
setQtdPalavras()

// criar divs deacordo com o tamnaho da palavra.
function criarDiv(x) {
  let protetor = document.querySelector(".protetor")
  
  for(let c = 0; c < x.length; c++){
    let div = document.createElement("div")
    div.classList.add("quadrado")
    protetor.appendChild(div)
  }
  
}

criarDiv(palavra)

// validador [valida se a letra informada está contida na palavra atual]
function validador(palavra) {
  
  let letra = document.querySelector("#entrada").value
  document.querySelector("#entrada").value = ""
  document.querySelector("#entrada").focus()
  letra = letra.toUpperCase()
  
  
  if(palavra.indexOf(letra) == -1){
    //resul negativo
    debitarVida()
    

  } else {
    //resul positivo
    palavra.forEach( (e,i) => {
      if(e == letra) {
        resultado[i] = e
        score = score + 10
      }
    })
    
    incluirDados()
    proximaFase()
    console.log(score)
  }
  
  
}


let btn = document.querySelector("#btnInformar")
btn.addEventListener("click", () => validador(palavra))

// salvar erro, inclui-lo em um vetor, debitar vida.
function debitarVida() {

  score = score - 10
  let scoreHtml = document.querySelector(".score")
  scoreHtml.textContent = score


  vida--
  fiscalizarVida()
  let v = document.querySelector(".vida")
  v.textContent = vida
  
}

// inclusao da letra no campo correspondente
function incluirDados() {
  let divs = document.querySelectorAll(".quadrado")
  let scoreHtml = document.querySelector(".score")
  
  divs.forEach( (el,i) => {
    el.textContent = resultado[i]
  })

  scoreHtml.textContent = score
  console.log(score)
}


// Determinador derrota.
 function fiscalizarVida() {
   if(vida <= 0) {
     window.location.href = "over.html"
   }
 }
 
 // Determinar próxima fase.
function proximaFase(){
  let contador = 0

  resultado.forEach( (e) => {
    if(e != undefined ) {
      contador++
    }
  })

  if(contador == palavra.length) {
    console.log(contador,palavra.length)
    resultado = []
    palavra = []

    let divs = document.querySelectorAll(".quadrado")
    divs.forEach((e) => {
      e.parentElement.removeChild(e)
    })
    
    sortear()
    criarDiv(palavra)
    acertos++
    setQtdPalavras()
    
  }
}
 




