
// ===============================
// 1. Positivo, negativo o cero (extendido)
// ===============================
function tipoNumero(num){
    if (isNaN(num)) {
        return "Error: no es un número válido";
    }

    if (num > 0) {
        return "El número es positivo";
    } else if (num < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}

let n1 = Number(prompt("1) Ingrese un número:"));
console.log(tipoNumero(n1));


// ===============================
// 2. Par o impar (extendido)
// ===============================
function esPar(num){
    if (isNaN(num)) {
        return "Error: valor inválido";
    }

    if (num % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

let n2 = Number(prompt("2) Ingrese un número:"));
console.log(esPar(n2));


// ===============================
// 3. Mayor de edad (extendido más completo)
// ===============================
let edad = Number(prompt("3) Ingrese su edad:"));

if (isNaN(edad)) {
    alert("Debe ingresar un número válido");
} else if (edad < 0) {
    alert("La edad no puede ser negativa");
} else {
    if (edad < 18) {
        alert("Eres menor de edad");
        console.log("Estado: menor de edad");
    } else if (edad >= 18 && edad < 60) {
        alert("Eres adulto");
        console.log("Estado: adulto joven/adulto");
    } else {
        alert("Eres adulto mayor");
        console.log("Estado: adulto mayor");
    }
}


// ===============================
// 4. 1 al 10
// ===============================
for (let i = 1; i <= 10; i++){
    console.log("Número:", i);
}


// ===============================
// 5. 10 al 1 (while extendido)
// ===============================
let i = 10;
while (i >= 1){
    console.log("Cuenta regresiva:", i);
    i--;
}


// ===============================
// 6. Tabla de multiplicar (extendida)
// ===============================
function tabla(num){
    if (isNaN(num)) {
        console.log("Número inválido");
        return;
    }

    console.log("Tabla del", num);

    for (let i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}

tabla(Number(prompt("6) Ingrese número para tabla:")));


// ===============================
// 7. Suma del 1 al 100
// ===============================
let suma = 0;
for (let i = 1; i <= 100; i++){
    suma += i;
}
console.log("Suma del 1 al 100:", suma);


// ===============================
// 8. Mayor de dos números (extendido)
// ===============================
function mayor(a,b){
    if (isNaN(a) || isNaN(b)) {
        return "Error: datos inválidos";
    }

    if (a > b) {
        return "Mayor: " + a;
    } else if (b > a) {
        return "Mayor: " + b;
    } else {
        return "Son iguales";
    }
}

console.log(mayor(10,20));


// ===============================
// 9. Contar letras (extendido)
// ===============================
function contarLetras(palabra){
    if (!isNaN(palabra)) {
        return "Error: debe ser texto";
    }

    return "Cantidad de letras: " + palabra.length;
}

console.log(contarLetras("Hola"));


// ===============================
// 10. Contar vocales (extendido)
// ===============================
function contarVocales(texto){
    let contador = 0;

    for (let letra of texto.toLowerCase()){
        if ("aeiou".includes(letra)){
            contador++;
        }
    }

    return "Vocales encontradas: " + contador;
}

console.log(contarVocales("JavaScript"));


// ===============================
// 11. Pares hasta n
// ===============================
function pares(n){
    for (let i = 0; i <= n; i+=2){
        console.log(i);
    }
}

pares(20);


// ===============================
// 12. Factorial (extendido)
// ===============================
function factorial(n){
    if (n < 0) return "No existe factorial";

    let resultado = 1;

    for (let i = 1; i <= n; i++){
        resultado *= i;
    }

    return "Factorial: " + resultado;
}

console.log(factorial(5));


// ===============================
// 13. Mostrar carácter por carácter
// ===============================
function mostrar(frase){
    for (let letra of frase){
        console.log(letra);
    }
}

mostrar("Hola");


// ===============================
// 14. Invertir palabra (extendido)
// ===============================
function invertir(palabra){
    let invertida = "";

    for (let i = palabra.length - 1; i >= 0; i--){
        invertida += palabra[i];
    }

    return invertida;
}

console.log("Invertida:", invertir("hola"));


// ===============================
// 15. Palabra más larga (extendido)
// ===============================
function palabraLarga(frase){
    let palabras = frase.split(" ");
    let mayor = "";

    for (let p of palabras){
        if (p.length > mayor.length){
            mayor = p;
        }
    }

    return "Palabra más larga: " + mayor;
}

console.log(palabraLarga("hola mundo javascript"));


// ===============================
// 16. Suma pares del 1 al 50
// ===============================
let sumaPares = 0;

for (let i = 0; i <= 50; i+=2){
    sumaPares += i;
}

console.log("Suma pares:", sumaPares);


// ===============================
// 17. Número primo (extendido)
// ===============================
function esPrimo(num){
    if (num < 2) return false;

    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }

    return true;
}

console.log("¿Es primo?:", esPrimo(7));


// ===============================
// 18. Patrón de asteriscos
// ===============================
for (let i = 1; i <= 5; i++){
    let linea = "";

    for (let j = 1; j <= i; j++){
        linea += "*";
    }

    console.log(linea);
}


// ===============================
// 19. Cajero automático (extendido)
// ===============================
let saldo = 1000;

let retiro = Number(prompt("19) Ingrese monto a retirar:"));

if (isNaN(retiro) || retiro <= 0){
    console.log("Monto inválido");
} else if (retiro <= saldo){
    saldo -= retiro;
    console.log("Retiro exitoso. Saldo actual:", saldo);
} else {
    console.log("Fondos insuficientes");
}


// ===============================
// 20. Login (extendido)
// ===============================
let user = "admin";
let pass = "1234";

let u = prompt("20) Usuario:");
let p = prompt("Contraseña:");

if (u === user && p === pass){
    console.log("Acceso permitido");
} else {
    console.log("Usuario o contraseña incorrectos");
}