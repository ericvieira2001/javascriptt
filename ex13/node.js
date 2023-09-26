var agora = new Date()
var diasemana = agora.getDay()

diasemana = 2
switch(diasemana){
case 0:
    console.log('domingo')
break

case 1:
    console.log('segunda - feira')
break

case 2:
    console.log('terça - feira')
break

case 3:
    console.log('quarta - feira')
break

case 4:
    console.log('quinta - feira')
break

case 5:
    console.log('sexta - feira')
break

case 6:
    console.log('sábado')
break


default:
    console.log('dia inválido')
}
console.log('escolha seu acompanhamento:')
var alimento = 5

switch(alimento){

case 0:
    console.log('linguiça')
break

case 1:
    console.log('salsicha')
break

case 2:
    console.log('frango frito')
    console.log(`Boa refeição!`)
break

default:
    console.log('opção inválida')

}
