function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    var altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
  
    var imc = peso / (altura * altura);
  
    if (isNaN(imc)) {
      document.getElementById("resultado").innerHTML = "Peso ou altura inválidos!";
    } else {
      document.getElementById("resultado").innerHTML = "Seu IMC é " + imc.toFixed(2) + ".";
      if (imc < 18.5) {
        document.getElementById("classificacao").innerHTML = "Você está abaixo do peso.";
      } else if (imc < 25) {
        document.getElementById("classificacao").innerHTML = "Seu peso está normal.";
      } else if (imc < 30) {
        document.getElementById("classificacao").innerHTML = "Você está com sobrepeso.";
      } else if (imc < 35) {
        document.getElementById("classificacao").innerHTML = "Você está com obesidade grau I.";
      } else if (imc < 40) {
        document.getElementById("classificacao").innerHTML = "Você está com obesidade grau II.";
      } else {
        document.getElementById("classificacao").innerHTML = "Você está com obesidade grau III.";
      }
    }
  }
  
  window.addEventListener("load", function() {
    document.getElementById("calcular").addEventListener("click", calcularIMC);
  });
  