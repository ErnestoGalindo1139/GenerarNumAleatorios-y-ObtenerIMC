function generar(){
    let edad = document.getElementById('edad');
    let altura= document.getElementById('altura');
    let peso= document.getElementById('peso');

    let aleatorioEdad = Math.floor(Math.random()*(99)+1); 

    edad.value = aleatorioEdad;
    
    let aleatorioAltura = (Math.random()*(2.5 - 1.5) + 1.5).toFixed(2);
    
    altura.value = aleatorioAltura;

    let aleatorioPeso = (Math.random()*(130 - 20) + 20).toFixed(2);

    peso.value = aleatorioPeso;

}

function calcular() {
    let edad = document.getElementById('edad').value;
    let altura= document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let nivel = document.getElementById('nivel');

    let imc = (peso / Math.pow(altura, 2));
    
    document.getElementById('imc').value = imc.toFixed(2);

    if(imc < 18.5){
        nivel.value = "Bajo peso"
    }else if(imc >= 18.5 && imc <= 24.9){
        nivel.value = "Peso Saludable"
    }else if(imc >= 25 && imc <= 29.9){
        nivel.value = "Sobrepeso"
    }else if(imc >= 30) {
        nivel.value = "Obesidad"
    }

}

