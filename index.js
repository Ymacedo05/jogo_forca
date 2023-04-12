localStorage.clear()

//Inicialização do componente modos
function iniciar() {
    document.querySelector(".componente").classList.add("active")

    
}

//Obtemos todos os inputs da mesma classificação e restringimos sua seleção.
let dificuldade = document.querySelectorAll('input[type=checkbox][name=dificuldade]');
dificuldade.forEach( (e,i) => {
    e.addEventListener("change", (x) => {

        dificuldade.forEach((n) => {
            n.checked = false
            if(n.value == x.target.value){
                n.checked = true
            } 
        })
    })
})


let categoria = document.querySelectorAll('input[type=checkbox][name=categoria]');
categoria.forEach( (e,i) => {
    e.addEventListener("change", (x) => {

        categoria.forEach((n) => {
            n.checked = false
            if(n.value == x.target.value){
                n.checked = true
            } 
        })
    })
})


let form = document.querySelector('#form')
form.addEventListener("submit", (e) => {e.preventDefault()})



//Obtenção de dados + salvamento local para nova pagina.
function comecar() {
    let dificuldade = document.querySelector('input[type=checkbox][name=dificuldade]:checked')

    let categoria = document.querySelector('input[type=checkbox][name=categoria]:checked')

    //Validação de formulário
    if(dificuldade && categoria) {

        let info = {dificuldade: dificuldade.value, categoria: categoria.value}
        localStorage.setItem("info", JSON.stringify(info))
        window.location.href = "jogo.html"

    } else {
        alert("[ERRO YY1] Para prosseguir, por favor selecione uma Dificuldade e uma Categoria. ")
    }
    
    

    

}

let btn = document.querySelector('#btn-comecar')
btn.addEventListener("click", comecar)