function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(forano.value.length == 0 || Number(forano.value) > ano){
        window.alert("erro! tente novamente...")
    } else {  
var fsex = document.getElementsByName('sex')
var idade = ano - Number(forano.value)
var genero = ''
var img = document.createElement('img')
img.setAttribute('id','foto')
if(fsex[0].checked){
    genero = 'homem'
if(idade >= 0 && idade < 10) {
img.setAttribute('src','bebemenino.jpg')
}else if (idade < 21){
    img.setAttribute('src','jovemhomem.jpg')
}else if (idade < 50){
    img.setAttribute('src','homemadulto.jpg')
}else{
    img.setAttribute('src','idoso.jpg')
}
}else if (fsex[1].checked) {
    genero = 'mulher'
    if(idade >= 0 && idade < 10) {
        img.setAttribute('src','bebemeninaa.jpg')
    }else if (idade < 21){
        img.setAttribute('src','jovemmulher.jpg')
    }else if (idade < 50){
        img.setAttribute('src','mulheradulta.jpg')
    }else{
        img.setAttribute('src','idosaa.jpg')
    } 
}
res.style.borderradius = 
res.innerHTML = `a idade calculada é :${idade} e sexo ${genero}`
res.appendChild(img)
    }
    }