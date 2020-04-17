const name = 'Bienvenidos';
console.log(`${name}`);

//Añado un evento al botón para que al hacer click muestre la ventana modal utilizando Bootstrap 4
document
  .querySelector('#myBtn')
  .addEventListener('click', () => document.querySelector('#myModal').modal());
