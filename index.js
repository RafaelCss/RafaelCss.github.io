
//add função ao menu hambuguer 
document.querySelector('.hamburguer').addEventListener("click",e=>{

document.querySelector(".container").classList.toggle("show-menu")//depois que clicar no hambuguer add uma class ...

})
const total = document.getElementById('total')
const pr = document.getElementById('pr')

 document.querySelector('#qtde').addEventListener("change", aparecerNaTela)
 document.getElementById('js').addEventListener('change', aparecerNaTela)
 document.getElementById('layot-sim').addEventListener('change',aparecerNaTela)
 document.getElementById('layot-nao').addEventListener('change', aparecerNaTela)
document.getElementById('prazo').addEventListener('change', e=>{
if(prazo.value > 1){

pr.innerHTML = `Prazo :${prazo.value} Semanas.`

}else{

pr.innerHTML = `Prazo :${prazo.value} Semana.`


}

aparecerNaTela()
})
 
function aparecerNaTela(){
    
var qtde =  document.getElementById('qtde')
var js  = document.getElementById('js')
var laysim = document.getElementById('layot-sim')
var prazo = document.getElementById('prazo')

var preco = 100;
preco*=qtde.value

if(js.checked) preco +=preco * 10/100
if(laysim.checked) preco+=500
let taxa = 1 - prazo.value * 0.1 //
preco += preco*taxa 


total.innerHTML = `Preço: R$ ${preco.toFixed(2).replace('.' ,',')} ` //toFixed coloca dua casas decimais depois da virgula e replace troca o ponto pela virgula
}



var forms = document.querySelectorAll('#forms-orc [name]')
var btn = document.querySelector('.btn-submit')
var info = {}

btn.addEventListener('click', e=>{

forms.forEach((campo, index) =>{

info[campo.name] = campo.value


})
console.log(info)
e.preventDefault()
})




