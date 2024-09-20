//Para ver si funciona el Js
console.log("Calculadora inicializada!"); 

//Documento que permite que los botones funcionen por clicks colocando el numero en la consola 
document.querySelector('#btn1').addEventListener('click', function() {
    console.log('1');
  });

  document.querySelector('#btn2').addEventListener('click', function() {
    console.log('2');
  });
  document.querySelector('#btn3').addEventListener('click', function() {
    console.log('3');
  });

  document.querySelector('#btn4').addEventListener('click', function() {
    console.log('4');
  });

  document.querySelector('#btn5').addEventListener('click', function() {
    console.log('5');
  });

  document.querySelector('#btn6').addEventListener('click', function() {
    console.log('6');
  });

  document.querySelector('#btn7').addEventListener('click', function() {
    console.log('7');
  });

  document.querySelector('#btn8').addEventListener('click', function() {
    console.log('8');
  });

  document.querySelector('#btn9').addEventListener('click', function() {
    console.log('9');
  });

  document.querySelector('#btn0').addEventListener('click', function() {
    console.log('0');
  });

  //Este metodo muestra los numeros por pantalla

  
document.querySelector('#btn1').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '1';
  });

  
