"use strict";
let text = document.getElementById('nombres');
let enviar = document.getElementById('enviar');
let lista = document.getElementById('lista');
let repetidos = document.getElementById('repetidos');
if (repetidos != null)
    repetidos.innerHTML = `veces un nombre repetido: ${0} \n porcentaje fallos: ${0}%`;
let diccionario = new Map();
let numero = 0;
let contadorRepetido = 0;
let vecesClickado = 0;
function enviarClickado() {
    if (diccionario.has(text.value)) {
        contadorRepetido++;
        vecesClickado++;
        diccionario.set(text.value, Number(diccionario.get(text.value)) + 1);
        if (repetidos != null)
            repetidos.innerHTML = `veces un nombre repetido: ${contadorRepetido}, \n porcentaje fallos: ${Math.ceil((contadorRepetido / vecesClickado) * 100)}%,`
                + ` \n Nombre: ${text.value}, numero de veces clickado el nombre: ${diccionario.get(text.value)}`;
        alert('Valor duplicado');
    }
    else {
        vecesClickado++;
        if (lista != null)
            lista.innerHTML += '<li>' + text.value + '</li>';
        diccionario.set(text.value, 1);
        if (repetidos != null)
            repetidos.innerHTML = `veces un nombre repetido: ${contadorRepetido}, \n porcentaje fallos: ${Math.ceil((contadorRepetido / vecesClickado) * 100)}%,`
                + ` \n Nombre: ${text.value}, numero de veces clickado el nombre: ${diccionario.get(text.value)}`;
    }
}
if (enviar != null)
    enviar.addEventListener('click', enviarClickado, false);
/*Ejercicio 8 parte del Set:*/
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
let nombreSet = document.getElementById('nombrePersona');
let edadSet = document.getElementById('edadPersona');
let enviarPersona = document.getElementById('crearPersona');
let mostrarMedia = document.getElementById('edadMedia');
let setPersonas = new Set();
if (mostrarMedia != null)
    mostrarMedia.innerHTML = 'Edad media = 0';
function crearPersona() {
    let persona = new Persona(nombreSet.value, Number(edadSet.value));
    let sumaEdades = 0;
    if (tienePersona(persona, setPersonas)) {
        alert('Persona duplicada');
    }
    else {
        setPersonas.add(persona);
    }
    setPersonas.forEach((personas) => sumaEdades += personas.edad);
    if (mostrarMedia != null)
        mostrarMedia.innerHTML = `Persona creada: nombre: ${persona.nombre}, edad: ${persona.edad}, edad media personas creadas: ${Math.ceil(sumaEdades / setPersonas.size)}`;
}
function tienePersona(persona, setPersonas) {
    for (let elemento of setPersonas.values()) {
        if (persona.edad == elemento.edad && persona.nombre == elemento.nombre) {
            return true;
        }
    }
    return false;
}
if (enviarPersona != null)
    enviarPersona.addEventListener('click', crearPersona, false);
class Empleado extends Persona {
    constructor(nombre, edad, id, exp) {
        super(nombre, edad);
        this.id = id;
        this.exp = exp;
    }
}
let nombreMap = document.getElementById('nombreEmpleado');
let edadMap = document.getElementById('edadEmpleado');
let idMap = document.getElementById('idEmpleado');
let expMap = document.getElementById('expEmpleado');
let enviarEmpleado = document.getElementById('crearEmpleado');
let mostrar = document.getElementById('mostrar');
let empleadosMap = new Map();
if (mostrar != null)
    mostrar.innerHTML = 'Edad media = 0, experiencia acumulada = 0';
function crearEmpleado() {
    let empleado = new Empleado(nombreMap.value, Number(edadMap.value), idMap.value, Number(expMap.value));
    if (empleadosMap.has(empleado.id)) {
        alert('Empleado duplicada');
    }
    else {
        empleadosMap.set(empleado.id, empleado);
    }
    mostrarEmpleado(empleado);
}
function mostrarEmpleado(empleado) {
    let sumaEdades = 0;
    let expTotal = 0;
    empleadosMap.forEach(function (empleado1, key) {
        sumaEdades += empleado.edad;
        expTotal += empleado.exp;
    });
    if (mostrar != null)
        mostrar.innerHTML = `Empleado creada: nombre: ${empleado.nombre}, edad: ${empleado.edad}, edad media personas empleados: ${Math.ceil(sumaEdades / empleadosMap.size)}`;
    if (mostrar != null)
        mostrar.innerHTML += '\n El id del empleado = ' + empleado.id + ' y la experienci es = ' + empleado.exp + ' la experiencia total es = ' + expTotal;
}
if (enviarEmpleado != null)
    enviarEmpleado.addEventListener('click', crearEmpleado, false);
//# sourceMappingURL=app.js.map