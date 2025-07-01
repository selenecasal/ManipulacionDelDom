const button = document.getElementById('botonCrear');

button.addEventListener('click', () => {
  const nuevaTarjeta = document.createElement("div");
  nuevaTarjeta.className = "tarjeta";

  // Título editable
  const titulo = document.createElement('h3');
  titulo.textContent = "Título";
  nuevaTarjeta.appendChild(titulo);

  // Imagen (inicialmente oculta)
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
      imagen.onload = () => {
        imagen.style.display = 'block'; // Mostrar la imagen solo si se carga correctamente
      };
      imagen.onerror = () => {
        alert('No se pudo cargar la imagen.'); // Mostrar mensaje de error si no se carga
        imagen.style.display = 'none'; // Asegurarse de ocultar la imagen si hay un error
      };
    }
  });

  // Botón eliminar
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = "Eliminar";
  nuevaTarjeta.appendChild(botonEliminar);

  botonEliminar.addEventListener('click', () => {
    nuevaTarjeta.remove();
  });

  // Botón editar: solo el título y la imagen
  const botonEditar = document.createElement('button');
  botonEditar.textContent = "Editar";
  botonEditar.className = "botonEditar";
  nuevaTarjeta.appendChild(botonEditar);

  let editando = false;

  botonEditar.addEventListener('click', function () {
    if (!editando) {
      // Activar modo edición solo para el título
      titulo.contentEditable = 'true';
      titulo.focus();
      this.textContent = 'Aceptar';

      // Permitir cambiar imagen también
      imagen.style.border = '2px dashed #aaa'; // Indicador visual editable
    } else {
      // Desactivar edición
      titulo.contentEditable = 'false';
      this.textContent = 'Editar';
      imagen.style.border = 'none';
    }
    editando = !editando;
  });

  document.getElementById('contenedor_tarjetas').appendChild(nuevaTarjeta);
});
