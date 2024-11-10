console.log("Hola")

//1
//Parseint para sacar de texto a numero
document.querySelector("#btnAleatorio").addEventListener("click", function(){
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let numAleatorio = Math.floor(Math.random() * (num2 - num1 + 1))

    document.querySelector("#numeroAleatorio").innerHTML =  numAleatorio;
})


//2
document.querySelector("#btnMayus").addEventListener("click", function(){
    const textArea = document.querySelector("#texto");
    textArea.value = textArea.value.toUpperCase(); //topercase pa poner mayuscula
  });

  document.querySelector("#btnMinus").addEventListener("click", function(){
    const textArea = document.querySelector("#texto");
    textArea.value = textArea.value.toLowerCase(); //tolower pa minuscula
  });



  //4  
  document.querySelector("#btn-contra").addEventListener("click", function(){
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contra = "";
    for (let i = 0; i < 10; i++) {
      contra += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    document.querySelector("#pass").value = contra;
  })


  //5 
  document.querySelector("#btn-emoji").addEventListener("click", function(){
 const emoji =  ["😃", "😂", "😍", "😎", "😭", "😡", "😱", "😏"];
 const emojiAle = Math.floor(Math.random() * emoji.length);
 document.querySelector("#emoji").innerHTML=emoji[emojiAle];

  })
  





