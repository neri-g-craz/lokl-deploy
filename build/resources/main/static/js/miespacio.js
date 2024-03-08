
/* const contenedor = document.getElementById('tarjetasGuardadas');
    for (let i = 0; i < localStorage.length; i++) {

        const clave = localStorage.key(i);
        const tarjetaHTML = localStorage.getItem(clave);
        contenedor.innerHTML += tarjetaHTML;
    } */
 
  const contenedor = document.getElementById('tarjetasGuardadas');

    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const tarjetaHTML = localStorage.getItem(clave);
    
        // Crear un elemento div para contener la tarjeta y el botón de eliminar
        const divTarjeta = document.createElement('div');
        divTarjeta.innerHTML = tarjetaHTML;
    
        // Crear un botón de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('especial2');
        btnEliminar.addEventListener('click', function() {
            // Remover el elemento del localStorage y del contenedor
            localStorage.removeItem(clave);
            divTarjeta.remove();
        });
    
        // Agregar el botón de eliminar al div de la tarjeta
        divTarjeta.querySelector('.card').appendChild(btnEliminar);
    
        // Agregar el div de la tarjeta al contenedor
        contenedor.appendChild(divTarjeta);
    }
    

/*   const contenedor = document.getElementById('tarjetasGuardadas');

for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    const tarjetaHTML = localStorage.getItem(clave);

    // Crear un elemento div para contener la tarjeta y el botón de eliminar
    const divTarjeta = document.createElement('div');
    divTarjeta.innerHTML = tarjetaHTML;

    // Crear un botón de eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', function() {
        // Remover el elemento del localStorage y del contenedor
        localStorage.removeItem(clave);
        divTarjeta.remove();
    });

    // Agregar el botón de eliminar al div de la tarjeta
    divTarjeta.appendChild(btnEliminar);

    // Agregar el div de la tarjeta al contenedor
    contenedor.appendChild(divTarjeta);
} */
