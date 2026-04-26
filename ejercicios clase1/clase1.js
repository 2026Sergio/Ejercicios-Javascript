// --- Ejercicios Clase 1 ---
// 1. Datos personales
let nombre = "Sergio";
let edad = 25;
let ciudad = "Guatemala";
console.log("Hola, mi nombre es", nombre, ", tengo", edad, "años y vivo en", ciudad);

// 2. Suma de dos números
let a = 10;
let b = 20;
let c = a + b;
console.log("Suma:", c);

// 3. Resta, multiplicación y división
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// 4. Promedio de tres números
let promedio1 = 100;
let promedio2 = 98;
let promedio3 = 93;
let total = promedio1 + promedio2 + promedio3;
console.log("promedio:", total / 3);

// 5. Conversión de edad a meses
let edad = 25;
let meses = edad * 12;
console.log("Meses vividos:", meses);

// 6. Conversión de horas a minutos y segundos
let horas = 2;
let minutos = horas * 60;
let segundos = minutos * 60;
console.log(horas, "horas son", minutos, "minutos o", segundos, "segundos");

// 7. Precio con IVA (19%)
let Base = 100;
let Final = Base * 1.19;
console.log("Precio con IVA:", Final);

// 8. Área de un rectángulo
let base = 10;
let altura = 5;
let area = base * altura;
console.log("Área del rectángulo:", area);

// 9. Perímetro de un rectángulo
let perimetro = 2 * (base + altura);
console.log("Perímetro:", perimetro);

// 10. Concatenación de strings
let nombreUsuario = "Sergio";
let apellidoUsuario = "Miranda";
let nombreCompleto = nombreUsuario + " " + apellidoUsuario;
console.log("Nombre completo:", nombreCompleto);

// 11. Longitud de una palabra
let palabra = "Desarrollo";
console.log("Longitud de la palabra:", palabra.length);

// 12. Primera y última letra
let primeraLetra = palabra[0];
let ultimaLetra = palabra[palabra.length - 1];
console.log("Primera letra:", primeraLetra, "Última letra:", ultimaLetra);

// 13. Convertir texto a mayúsculas y minúsculas
let frase = "Aprendiendo Backend";
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

// 14. Extraer parte de un texto
let frase = "pais de la eterna primavera";
let palabraExtraida = frase.slice(12, 18);
console.log("Palabra extraída:", palabraExtraida);

// 15. Reemplazar palabra en una frase
let frase = "Escuintla, ciudad de las palmeras";
let nuevaFrase = frase.replace("ciudad", "departamento");
console.log("Frase reemplazada:", nuevaFrase);

// 16. Operadores de incremento
let contador = 5;
console.log(++contador);
console.log(++contador); 
console.log(++contador); 

// 17. Operadores compuestos
let n = 10;
n += 5; 
n -= 2;
n *= 2;
n /= 2;
console.log("Resultado operadores compuestos:", n);

// 18. Concatenar número y texto
let puntaje = 100;
let mensajeFinal = "Tu puntaje es: " + puntaje;
console.log(mensajeFinal);

// 19. Calcular el residuo
let numeroA = 10;
let numeroB = 3;
let residuo = numeroA % numeroB;
console.log("El residuo de la división es:", residuo); 

// 20. Construir un mensaje complejo
let nombrePersona = "Sergio";
let edadPersona = 25;
let hobby = "programar y ver boxeo";
let comidaFavorita = "puyaso";
let mensajeComplejo = ("Hola, mi nombre es ", nombrePersona,", tengo ", edadPersona," años. Mi hobby favorito es ", hobby, " y mi comida favorita es el ", comidaFavorita + ".");
console.log(mensajeComplejo);