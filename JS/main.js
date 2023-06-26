let respuesta;
let validacion;

do {
  respuesta = prompt("Ingrese la operación que desea realizar: \nC para calcular el IMC");

  validacion = validarOperacion(respuesta);

  if (validacion) {
    switch (respuesta) {
      case "C":
        calcularIMC();
        break;

      default:
        alert("Operación no encontrada");
    }
  } else {
    alert("Ingresaste una operación que no es válida. Intente nuevamente");
    console.log(validacion);
  }
} while (!validacion);

function calcularIMC() {
  let peso = parseFloat(prompt("Ingrese su peso en kilogramos, ejemplo: 75 Kilos"));
  let altura = parseFloat(prompt("Ingrese su altura en metros, ejemplo: 1.75 Metros"));

  if (isNaN(peso) || isNaN(altura)) {
    alert("Los valores ingresados no son válidos. Cálculo del IMC cancelado");
  } else {
    let imc = peso / (altura * altura);
    let mensaje = "Su IMC es: " + imc.toFixed(2) + ". ";

    if (imc < 18.5) {
      mensaje += "Usted se encuentra bajo peso. Por favor contacte a su médico de confianza.";
    } else if (imc >= 18.5 && imc < 25) {
      mensaje += "Usted tiene un peso saludable.";
    } else if (imc >= 25 && imc < 30) {
      mensaje += "Usted tiene sobrepeso. Por favor contacte a su médico de confianza.";
    } else {
      mensaje += "Usted tiene obesidad. Por favor contacte a su médico de confianza.";
    }

    alert(mensaje);
  }
}

function validarOperacion(oper) {
  if (oper === "C") {
    return true;
  } else {
    return false;
  }
}