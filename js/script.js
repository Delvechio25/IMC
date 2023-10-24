function calcular() {
    const peso =(document.getElementById('peso')).value
    const altura = (document.getElementById('altura')).value
    let imc = (peso/Math.pow(altura, 2)) 
    const resultado = document.getElementById('result')
    resultado.innerHTML = "O seu IMC é de: " + imc.toFixed(2)
    
    

}