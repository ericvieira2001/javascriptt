var agora = new Date()
var horas = agora.getHours()

if(horas < 12 ){
    console.log("bom dia")
}else{  
    if(horas < 18){
        console.log("boa tarde")
    }else{
        if(horas >= 18 ){
            console.log("boa noite")
        }
            
        }
    }
