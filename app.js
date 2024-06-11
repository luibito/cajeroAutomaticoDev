
let usuarioSeleccionado;
document.getElementById("accion").style.display = "none";
document.getElementById("usuarioIncorrecto").style.display = "none";
document.getElementById("usuarioCorrecto").style.display = "none";
document.getElementById("informacion").style.display = "none";
document.getElementById("presentacion").style.display = "none";

function ingresar() {
  let usuario = document.getElementById("usuario").value;
  let contrasenia = document.getElementById("contrasenia").value;

  validarUsuarioLogin(usuario, contrasenia);
}

function validarUsuarioLogin(usuario, contra) {
  let usuarioValido = false;
  for (let i = 0; i < cuentas.length; i++) {
    if (usuario === cuentas[i].nombre && contra === cuentas[i].password) {
      document.getElementById("usuarioCorrecto").style.display = "block";
      document.getElementById("presentacion").style.display = "block";
      usuarioValido = true;
      mostrarMenuHTML(i);
      usuarioSeleccionado = i;
      console.log(usuario, contra);
      return;
    }
  }

  if (!usuarioValido) {
    document.getElementById("usuarioIncorrecto").style.display = "block";
  }
}

function mostrarMenuHTML(usuarioSeleccionado) {
  document.getElementById("login").style.display = "none";
  document.getElementById("accion").style.display = "block";
  document.getElementById("informacion").style.display = "block";
  document.getElementById("nombreUsuario").innerText = cuentas[usuarioSeleccionado].nombre;
  document.getElementById("consultar").addEventListener("click", function () {
    console.log(consultar);
    document.getElementById("informacion").innerText =
      "El saldo actual es de: $" + cuentas[usuarioSeleccionado].saldo;
  });
  
}


function retirarDineroHTML() {
  var retirarDinero = document.getElementById("retirarDinero").value;
  var saldototal = cuentas[usuarioSeleccionado].saldo - retirarDinero;
  if (saldototal <= 10) {
    document.getElementById("informacion").innerText =
      "Ingresa una nueva cantidad";
  } else {
    document.getElementById("informacion").innerText =
      "El saldo actual es de: $" + saldototal + " por un retiro de " + retirarDinero;
      cuentas[usuarioSeleccionado].saldo = saldototal;
  }
}

function ingresarDineroHTML() {
  var agregarDinero = parseInt(document.getElementById("agregarDinero").value);
  var saldototal = (cuentas[usuarioSeleccionado].saldo) + Number(agregarDinero);
  if (saldototal >= 990) {
    document.getElementById("informacion").innerText =
      "Es imposible agregar esa cantidad supera el limite permitido";
  } else {
    document.getElementById("informacion").innerText =
      "El saldo actual es de: $" +
      saldototal +
      " por un deposito de $" +
      agregarDinero;
      cuentas[usuarioSeleccionado].saldo = saldototal;
  }
}

