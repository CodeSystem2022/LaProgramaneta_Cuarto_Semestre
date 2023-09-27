console.log('Inicio del programa');
setTimeout(() =>{
    console.log('Primer Timeout');
}, 3000);

setTimeout(() =>{
    console.log('Segundo Timeout');
}, 0);

setTimeout(() =>{
    console.log('Tercero Timeout');
}, 0);

console.log('Fin del programa');