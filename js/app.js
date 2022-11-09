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



