const name = 'Bienvenidos';
console.log(`${name}`);

/*Añado un evento al botón para que al hacer click le añada el atributo de datos "target" 
utilizado por Bootstrap 4 para mostrar la ventana modal*/
document
  .querySelector('#modal')
  .addEventListener(
    'click',
    () => (document.querySelector('#modal').dataset.target = '#myModal')
  );
