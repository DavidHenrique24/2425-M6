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
  document.querySelector('#btn2').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '2';
  });
  document.querySelector('#btn3').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '3';
  });
  document.querySelector('#btn4').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '4';
  });
  document.querySelector('#btn5').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '5';
  });
  document.querySelector('#btn6').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '6';
  });
  document.querySelector('#btn7').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '7';
  });
  document.querySelector('#btn8').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '8';
  });
  document.querySelector('#btn9').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '9';
  });
  document.querySelector('#btn0').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '0';
  });

// Poner numeros consecutivos

let entradaActual = '';

document.getElementById('btn1').addEventListener('click', function() {
  entradaActual += '1';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn2').addEventListener('click', function() {
  entradaActual += '2';
  document.getElementById('pantalla').textContent = entradaActual;
});
document.getElementById('btn3').addEventListener('click', function() {
  entradaActual += '3';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn4').addEventListener('click', function() {
  entradaActual += '4';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn5').addEventListener('click', function() {
  entradaActual += '5';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn6').addEventListener('click', function() {
  entradaActual += '6';
  document.getElementById('pantalla').textContent = entradaActual;
});
document.getElementById('btn7').addEventListener('click', function() {
  entradaActual += '7';
  document.getElementById('pantalla').textContent = entradaActual;
});
document.getElementById('btn8').addEventListener('click', function() {
  entradaActual += '8';
  document.getElementById('pantalla').textContent = entradaActual;
});
document.getElementById('btn9').addEventListener('click', function() {
  entradaActual += '9';
  document.getElementById('pantalla').textContent = entradaActual;
});
document.getElementById('btn0').addEventListener('click', function() {
  entradaActual += '0';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btnSuma').addEventListener('click', function() {
  entradaActual += '+';
  document.getElementById('pantalla').textContent = entradaActual;
});

//Agregar el + y el - para que se vean en pantalla

document.getElementById('btnResta').addEventListener('click', function() {
  entradaActual += '-';
  document.getElementById('pantalla').textContent = entradaActual;
});

//Realizar los calculos


document.getElementById('btnIgual').addEventListener('click', function() {
  const resultat = eval(entradaActual);
  console.log('Resultat:', resultat); 
  document.getElementById('pantalla').textContent = resultat;
});

//Despejar la pantalla 

document.getElementById('btnBorrar').addEventListener('click', function() {
  entradaActual = '';
  document.getElementById('pantalla').textContent = '0';
});

//Control de errores para cada cosa 


document.getElementById('btnIgual').addEventListener('click', function() {
  try {
    if (entradaActual !== '') {
      const resultat = eval(entradaActual);
      document.getElementById('pantalla').textContent = resultat;
    } else {
      console.log('No hi ha res a calcular');
    }
  } catch (error) {
    console.log('Error en l\'operació:', error);
    document.getElementById('pantalla').textContent = 'Error';
  }
});