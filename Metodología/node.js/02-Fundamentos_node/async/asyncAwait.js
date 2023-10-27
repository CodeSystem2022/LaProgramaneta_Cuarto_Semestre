// La palabra async no es necesaria en las funciones que ya son asincronas
//igual proyectan uan sincronia visual
async function hola(nombre){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, '+nombre);
           resolve(nombre);
        }, 1000);
    })
} 

async function hablar(nombre){
    return new Promise( (resolve, reject) => { //Usamos la sintaxis ES6
        setTimeout(function() {
            console.log('bla bla bla bla');
            resolve(nombre);
        }, 1000);
    })
    
}

async function adios(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            //validamos el error o aprobacion
            console.log('Adios '+ nombre);
            //if(err) reject('Hay un error');
            resolve();
        }, 1000);  
    }); 
}

//await hola('Ariel') //esto es una mala sintaxis
// await solo es valido dentro de una funcion asincrona 
async function main(){
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...');
}

//console.log('Empezamos el proceso...');
//main();
//console.log('Esta va as ser la segunda instruccion');


//CODIGO EN INGLES
//Es asincronico y retorna una promesa
function sayHello(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello, '+name);
           resolve(name);
        }, 1000);
    })
} 

function talk(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla bla');
            resolve(name);
        }, 1000);
    })
    
}

function sayBye(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Goodbye '+ name);
            resolve();
        }, 1000);  
    }); 
}

async function conversation(){
    console.log('Code in english');
    console.log('Starting async process...');
    let name = await sayHello('name');
    await talk();
    await talk();
    await sayBye(name);
    console.log('Process completed...');
}

conversation('Ariel');
