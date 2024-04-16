

let text = <HTMLInputElement>document.getElementById('nombres');
let enviar = document.getElementById('enviar');
let lista = document.getElementById('lista');
let repetidos = document.getElementById('repetidos');

if (repetidos != null) repetidos.innerHTML = `veces un nombre repetido: ${0} \n porcentaje fallos: ${0}%`;

let diccionario = new Map<string,number>();
let numero: number = 0;
let contadorRepetido: number = 0;
let vecesClickado: number = 0;
function enviarClickado() {
    if (diccionario.has(text.value)) {
        contadorRepetido++;
        vecesClickado++;
        diccionario.set(text.value, Number(diccionario.get(text.value)) + 1);
        if (repetidos != null) repetidos.innerHTML = `veces un nombre repetido: ${contadorRepetido}, \n porcentaje fallos: ${Math.ceil((contadorRepetido / vecesClickado) * 100)}%,`
            + ` \n Nombre: ${text.value}, numero de veces clickado el nombre: ${diccionario.get(text.value)}`;
        alert('Valor duplicado');
    } else {
        vecesClickado++;
        if (lista != null) lista.innerHTML += '<li>' + text.value + '</li>';
        diccionario.set(text.value, 1);
        if (repetidos != null) repetidos.innerHTML = `veces un nombre repetido: ${contadorRepetido}, \n porcentaje fallos: ${Math.ceil((contadorRepetido / vecesClickado) * 100)}%,`
            + ` \n Nombre: ${text.value}, numero de veces clickado el nombre: ${diccionario.get(text.value)}`;
    }
}

if (enviar != null) enviar.addEventListener('click', enviarClickado, false);


/*Ejercicio 8 parte del Set:*/

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let nombreSet = <HTMLInputElement>document.getElementById('nombrePersona');
let edadSet = <HTMLInputElement>document.getElementById('edadPersona');
let enviarPersona = document.getElementById('crearPersona');
let mostrarMedia = document.getElementById('edadMedia');

let setPersonas = new Set<Persona>();

if(mostrarMedia != null)mostrarMedia.innerHTML = 'Edad media = 0';

function crearPersona() {
    let persona: Persona = new Persona(nombreSet.value, Number(edadSet.value));
    let sumaEdades = 0;
    if (tienePersona(persona, setPersonas)) {
        alert('Persona duplicada');
    } else {
        setPersonas.add(persona);
    }
    setPersonas.forEach((personas: Persona) => sumaEdades += personas.edad);
    if (mostrarMedia != null) mostrarMedia.innerHTML = `Persona creada: nombre: ${persona.nombre}, edad: ${persona.edad}, edad media personas creadas: ${Math.ceil(sumaEdades / setPersonas.size)}`;
}

function tienePersona(persona: Persona, setPersonas: Set<Persona>): boolean {
    for (let elemento of setPersonas.values()) {
        if (persona.edad == elemento.edad && persona.nombre == elemento.nombre) {
            return true;
        }
    }
    return false;
}

if (enviarPersona != null) enviarPersona.addEventListener('click', crearPersona, false);

class Empleado extends Persona {
    id: string;
    exp: number;

    constructor(nombre: string, edad: number, id: string, exp: number) {
        super(nombre, edad);
        this.id = id;
        this.exp = exp;
    }
}

let nombreMap = <HTMLInputElement>document.getElementById('nombreEmpleado');
let edadMap = <HTMLInputElement>document.getElementById('edadEmpleado');
let idMap = <HTMLInputElement>document.getElementById('idEmpleado');
let expMap = <HTMLInputElement>document.getElementById('expEmpleado');
let enviarEmpleado = document.getElementById('crearEmpleado');
let mostrar = document.getElementById('mostrar');

let empleadosMap = new Map<string, Empleado>();

if (mostrar!= null) mostrar.innerHTML = 'Edad media = 0, experiencia acumulada = 0';

function crearEmpleado() {
    let empleado: Empleado = new Empleado(nombreMap.value, Number(edadMap.value), idMap.value, Number(expMap.value));
    if (empleadosMap.has(empleado.id)) {
        alert('Empleado duplicada');
    } else {
        empleadosMap.set(empleado.id, empleado);
    }
    mostrarEmpleado(empleado);
}

function mostrarEmpleado(empleado : Empleado) {
    let sumaEdades = 0;
    let expTotal = 0;
    empleadosMap.forEach(function (empleado1: Empleado, key: string) {
        sumaEdades += empleado.edad;
        expTotal += empleado.exp;
    });
    if (mostrar != null) mostrar.innerHTML = `Empleado creada: nombre: ${empleado.nombre}, edad: ${empleado.edad}, edad media personas empleados: ${Math.ceil(sumaEdades / empleadosMap.size)}`;
    if (mostrar != null) mostrar.innerHTML += '\n El id del empleado = ' + empleado.id + ' y la experienci es = ' + empleado.exp + ' la experiencia total es = ' + expTotal;
}

if (enviarEmpleado != null) enviarEmpleado.addEventListener('click', crearEmpleado, false);
