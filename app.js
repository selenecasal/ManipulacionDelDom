
const button = document.getElementById('botonCrear');

button.addEventListener('click', () => {
  const nuevaTarjeta = document.createElement("div");
  nuevaTarjeta.className = "tarjeta";
  nuevaTarjeta.textContent = "titulo";

  // Imagen (opcional, se agrega después si se da una URL)
  const imagen = document.createElement('img');
  imagen.className = 'imagenTarjeta';
  imagen.style.display = 'none';
  nuevaTarjeta.appendChild(imagen);

  // Botón para agregar imagen desde URL
  const botonImagen = document.createElement('button');
  botonImagen.textContent = 'Agregar Imagen';
  nuevaTarjeta.appendChild(botonImagen);

  botonImagen.addEventListener('click', () => {
    const url = prompt('Pegá la URL de la imagen:');
    if (url) {
      imagen.src = url;
      imagen.style.display = 'block';
      imagen.onerror = () => {
        imagen.style.display = 'none';
        alert('No se pudo cargar la imagen.');
      };
    }
  });

  // Botón eliminar
  const botonEliminar = document.createElement('button');
  nuevaTarjeta.appendChild(botonEliminar);
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener('click', () => {
    nuevaTarjeta.remove();
  });

  // Botón editar
  const botonEditar = document.createElement('button');
  nuevaTarjeta.appendChild(botonEditar);
  botonEditar.className = "botonEditar";
  botonEditar.textContent = "Editar";
  botonEditar.addEventListener('click', function () {
    if (nuevaTarjeta) {
      const estado = nuevaTarjeta.contentEditable === 'true';
      nuevaTarjeta.contentEditable = estado ? 'false' : 'true';
      this.textContent = estado ? 'Editar' : 'Aceptar';
    }
  });

  document.getElementById('contenedor_tarjetas').appendChild(nuevaTarjeta);
});

