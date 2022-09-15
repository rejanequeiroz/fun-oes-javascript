
function numero(altura, peso){
    var imc = (altura / peso **2)

    if (imc < 18.5){
    return console.log("abaixo do peso")
    }

    else if(imc >=18.5 && imc <=24.9 ){
    return console.log(" peso normal ")

    }
    else if(imc >= 25.0 && imc <= 29.9){
    return console.log("a cima do peso")

    }
    else if(imc >= 30.0 && imc <= 34.9){
    return console.log("obesidade 1")
    }
    else if(imc >= 35.0 && imc <= 39.9){
    return console.log("obesidade 2")
    }    
    else if(imc >= 40){
    return console.log("obesidade 3")
    }
    
}
numero(1.60, 27)

    
    
 



