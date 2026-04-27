// === 1. Crear un objeto estudiante ===
const estudiante = {
    nombre: "Juan Pérez",
    edad: 20,
    curso: "JavaScript Avanzado",
    notas: [8, 9, 10]
};
const { nombre, curso } = estudiante;
console.log("El estudiante " + nombre + " está en el curso de " + curso);

// === 2. Lista de estudiantes ===
const estudiantes = [
    { nombre: "Ana", edad: 22, curso: "JS", notas: [10, 9, 8] },
    { nombre: "Luis", edad: 19, curso: "JS", notas: [5, 6, 4] },
    { nombre: "Maria", edad: 25, curso: "JS", notas: [10, 10, 10] },
    { nombre: "Pedro", edad: 18, curso: "JS", notas: [4, 3, 5] },
    { nombre: "Sofía", edad: 21, curso: "JS", notas: [7, 8, 8] }
];
console.log("Nombres de la lista:");
estudiantes.forEach(est => console.log(est.nombre));

// === 3. Promedio de notas por estudiante ===
estudiantes.forEach(est => {
    let suma = est.notas.reduce((acc, n) => acc + n, 0);
    est.promedio = suma / est.notas.length;
    console.log("Promedio de " + est.nombre + ": " + est.promedio.toFixed(2));
});

// === 4. Buscar el estudiante mayor ===
let estudianteMayor = estudiantes[0];
for (let est of estudiantes) {
    if (est.edad > estudianteMayor.edad) {
        estudianteMayor = est;
    }
}
console.log("El mayor es: " + estudianteMayor.nombre);

// === 5. Filtrar estudiantes aprobados (>= 3.0) ===
const aprobados = estudiantes.filter(est => est.promedio >= 3.0);
console.log("Aprobados:", aprobados);

// === 6. Desestructurar dentro de un ciclo ===
for (let { nombre, edad } of estudiantes) {
    console.log("Nombre: " + nombre + ", Edad: " + edad);
}

// === 7. Crear un Set de materias ===
const materias = new Set();
materias.add("Lógica");
materias.add("Bases de Datos");
materias.add("Lógica"); 
console.log("Materias únicas:", materias);

// === 8. Convertir un arreglo a Set ===
const numeros = [1, 2, 2, 3, 4, 4, 5];
const unicos = new Set(numeros);
console.log("Arreglo sin duplicados:", [...unicos]);

// === 9. Crear un Map de productos ===
const carrito = new Map();
carrito.set("Monitor", 1200);
carrito.set("Teclado", 150);
carrito.set("Mouse", 80);

// === 10. Calcular total del carrito usando Map ===
let totalCarrito = 0;
carrito.forEach((precio) => totalCarrito += precio);
console.log("Total a pagar: Q " + totalCarrito);

// === 11. Verificar existencia en Map ===
let productoBuscar = "Monitor";
if (carrito.has(productoBuscar)) {
    console.log("El " + productoBuscar + " cuesta Q" + carrito.get(productoBuscar));
}

// === 12. Objeto con métodos ===
const cuentaBancaria = {
    titular: "Antonio",
    saldo: 500,
    depositar: function(monto) {
        this.saldo += monto;
        console.log("Depósito de Q" + monto + " realizado. Saldo actual: Q" + this.saldo);
    }
};
cuentaBancaria.depositar(200);

// === 13. Lista de objetos productos (Filtro) ===
const productosTienda = [
    { nombre: "Manzana", precio: 5, categoria: "Fruta" },
    { nombre: "Leche", precio: 12, categoria: "Lácteos" },
    { nombre: "Pera", precio: 6, categoria: "Fruta" }
];
const frutas = productosTienda.filter(p => p.categoria === "Fruta");
console.log("Solo frutas:", frutas);

// === 14. Ordenar productos por precio ===
const ordenados = [...productosTienda].sort((a, b) => a.precio - b.precio);
console.log("Ordenados por precio:", ordenados);

// === 15. Desestructuración anidada ===
const persona = {
    id: 1,
    ubicacion: {
        direccion: "Calle Falsa 123",
        ciudad: "Guatemala"
    }
};
const { ubicacion: { direccion, ciudad } } = persona;
console.log("Vive en: " + direccion + ", Ciudad: " + ciudad);

// === 16. Contar elementos únicos con Set ===
const nombresRepetidos = ["Ana", "Pedro", "Ana", "Luis", "Pedro"];
console.log("Cantidad de nombres únicos: " + new Set(nombresRepetidos).size);

// === 17. Crear un Map a partir de un arreglo ===
const productosMap = new Map(productosTienda.map(p => [p.nombre, p.precio]));
console.log("Nuevo Map de productos:", productosMap);

// === 18. Eliminar elementos de un Set ===
const herramientas = new Set(["Martillo", "Clavos", "Serrucho"]);
herramientas.delete("Clavos");
console.log("Set tras eliminar:", herramientas);

// === 19. Recorrer un Map con desestructuración ===
for (let [llave, valor] of carrito) {
    console.log("Producto: " + llave + " -> Precio: Q" + valor);
}

// === 20. Mini sistema de biblioteca ===
const biblioteca = [
    { titulo: "Cien años de soledad", autor: "Gabo", estado: "disponible" },
    { titulo: "El Quijote", autor: "Cervantes", estado: "prestado" },
    { titulo: "Harry Potter", autor: "J.K. Rowling", estado: "disponible" }
];
const librosDisponibles = biblioteca.filter(libro => libro.estado === "disponible");
console.log("Libros para prestar hoy:", librosDisponibles);