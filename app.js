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
//# sourceMappingURL=file.js.map