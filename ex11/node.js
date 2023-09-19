idade = 
if(idade < 16){
    console.log ("você é de menor e AINDA não pode VOTAR")
}else{
    if(idade < 18 || idade >= 65) {
        console.log('o seu VOTO é OPCIONAL')
    }else{
        if( idade >= 18) {
            console.log('o  seu VOTO é OBRIGATÓRIO')
        }
    }
}