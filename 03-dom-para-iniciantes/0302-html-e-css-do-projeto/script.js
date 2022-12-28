 const img = document.querySelectorAll('img');
 console.log(img);

 const imagemAniaml = document.querySelectorAll('img[src^="img/imagem"]');
 console.log(imagemAniaml);

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log (linkInterno);

const animais = document.querySelector('.animais-descrição');
const h2Animais = document.querySelector('h2');
console.log(h2Animais);

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos [--paragrafos.length]);