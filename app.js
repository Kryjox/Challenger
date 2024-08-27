function encriptarTexto() {
    var input = document.getElementById('inputTexto').value;
    var textoEncriptado = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('mensajeResultado').textContent = textoEncriptado;

    // Llamada a la función para mostrar el resultado y ocultar elementos
    mostrarResultado();
}

function desencriptarTexto() {
    var input = document.getElementById('inputTexto').value;
    var textoDesencriptado = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('mensajeResultado').textContent = textoDesencriptado;

    // Llamada a la función para mostrar el resultado y ocultar elementos
    mostrarResultado();
}

function mostrarResultado() {
    // Oculta los elementos que deben desaparecer
    document.querySelector(".imageninicial").style.display = "none";
    document.querySelector(".textone").style.display = "none";
    document.querySelector(".texttwo").style.display = "none";
    
    // Muestra el mensaje de resultado
    let mensajeResultado = document.getElementById("mensajeResultado");
    mensajeResultado.style.fontSize = "2rem"; // Aumenta el tamaño del texto
    mensajeResultado.style.display = "block"; // Muestra el elemento
    
    // Muestra el botón de copiar
    document.getElementById("btnCopiar").style.display = "block";
}

function copiarTexto() {
    var texto = document.getElementById('mensajeResultado').textContent;
    navigator.clipboard.writeText(texto).then(function() {
        console.log('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el texto:', err);
    });
}

// Oculta el botón de copiar y el mensaje de resultado al inicio
document.getElementById("mensajeResultado").style.display = "none";
document.getElementById("btnCopiar").style.display = "none";