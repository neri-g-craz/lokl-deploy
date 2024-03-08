function generarTarjeta() {
  var nombre = document.getElementById("inputNombre").value;
  var espacio = document.getElementById("inputEspacio").value;
  var capacidad = document.getElementById("inputCapacidad").value;
  var direccion = document.getElementById("inputCalle").value + ", " +
                  document.getElementById("inputNumeroExt").value + ", " +
                  document.getElementById("inputNumeroInt").value + ", " +
                  document.getElementById("inputAlcaldia").value + ", " +
                  document.getElementById("inputEstado").value + ", " +
                  document.getElementById("inputCodigo").value;
  var precio = document.getElementById("inputPrecio").value;
  var fotos = document.getElementById("inputFotos").files;

  // Guardar los datos en localStorage
  var nuevaTarjeta = {
      nombre: nombre,
      espacio: espacio,
      capacidad: capacidad,
      direccion: direccion,
      precio: precio,
      fotos: fotos
  };

  var tarjetasGuardadas = JSON.parse(localStorage.getItem('tarjetas')) || [];
  tarjetasGuardadas.push(nuevaTarjeta);
  localStorage.setItem('tarjetas', JSON.stringify(tarjetasGuardadas));

  // Generar la tarjeta en el HTML
  var tarjetaHTML = `<div class="col-md-4">
                          <div class="card">
                              <img src="${URL.createObjectURL(fotos[0])}" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <h5 class="card-title">${nombre}</h5>
                                  <p class="card-text">Tipo de Espacio: ${espacio}</p>
                                  <p class="card-text">Capacidad: ${capacidad}</p>
                                  <p class="card-text">Dirección: ${direccion}</p>
                                  <p class="card-text">Precio: ${precio}</p>
                              </div>
                          </div>
                      </div>`;
  document.getElementById("tarjetas").innerHTML += tarjetaHTML;

  // window.location.href = "miespacio.html";
}

