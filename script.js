

let vida = 3
let resultado = []


let palavra = ""
let dica = ""

let score = 0




//Sorteador de palavras
function sortear(){

  let dados = {
    animais:["urso","cavalo","leopardo"],
    cidades: ["guarulhos","arujá","itaqua"],
    animes: ["Naruto","Boruto","Gantz"]
  
  }
  
  function sortearClasse() {
  
    //Categoria 
    let categorias = Object.keys(dados)
    console.log(categorias)
  
    let tamCategorias = categorias.length 
    console.log(tamCategorias)
  
    let catAleNum = Math.floor(Math.random()*tamCategorias)
    console.log(catAleNum)
  
  
    
    
    if(catAleNum == 0) {
      sortearPalavra(dados.animais)
      criarDica(categorias[0])
  
    } else if (catAleNum == 1) {
      sortearPalavra(dados.cidades)
      criarDica(categorias[1])
  
    } else if(catAleNum == 2) {
      sortearPalavra(dados.animes)
      criarDica(categorias[2])
    }
    
  }

  sortearClasse()
  

  function sortearPalavra(y) {
    console.log(y)
  
    let tamY = y.length
    console.log(tamY)
  
    let numAle = Math.floor(Math.random()*tamY)
    console.log(numAle)
  
    if(numAle == 0) {
      palavra = y[0]
  
    } else if(numAle == 1) {
      palavra = y[1]
  
    } else if(numAle == 2) {
      palavra = y[2]
    }

    palavra = palavra.toUpperCase()
    palavra = palavra.split("")
    console.log(palavra)
  }
  console.log("fim")
}

sortear()

//criar dica
function criarDica(y) {
  let dica = document.querySelector(".dica")
  dica.textContent = y
}

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


let btn = document.querySelector("#btn")
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
    
  }
}
 




