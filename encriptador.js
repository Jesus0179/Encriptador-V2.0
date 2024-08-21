function encriptar(texto) {
    return texto
        .replace(/a/g, "b2")
        .replace(/b/g, "1c")
        .replace(/c/g, "d4")
        .replace(/d/g, "e5")
        .replace(/e/g, "f1")
        .replace(/f/g, "g3")
        .replace(/g/g, "h6")
        .replace(/h/g, "j7")
        .replace(/i/g, "k8")
        .replace(/j/g, "l9")
        .replace(/k/g, "m2n")
        .replace(/l/g, "p4r")
        .replace(/m/g, "q3s")
        .replace(/n/g, "t6u")
        .replace(/o/g, "v1x")
        .replace(/p/g, "y2z")
        .replace(/q/g, "a3b")
        .replace(/r/g, "c5d")
        .replace(/s/g, "e7f")
        .replace(/t/g, "g9h")
        .replace(/u/g, "i2j")
        .replace(/v/g, "k4l")
        .replace(/w/g, "m6n")
        .replace(/x/g, "o8p")
        .replace(/y/g, "q1r")
        .replace(/z/g, "s3t");
}

function desencriptar(texto) {
    return texto
        .replace(/s3t/g, "z")
        .replace(/q1r/g, "y")
        .replace(/o8p/g, "x")
        .replace(/m6n/g, "w")
        .replace(/k4l/g, "v")
        .replace(/i2j/g, "u")
        .replace(/g9h/g, "t")
        .replace(/e7f/g, "s")
        .replace(/c5d/g, "r")
        .replace(/a3b/g, "q")
        .replace(/y2z/g, "p")
        .replace(/v1x/g, "o")
        .replace(/t6u/g, "n")
        .replace(/q3s/g, "m")
        .replace(/p4r/g, "l")
        .replace(/m2n/g, "k")
        .replace(/l9/g, "j")
        .replace(/k8/g, "i")
        .replace(/j7/g, "h")
        .replace(/h6/g, "g")
        .replace(/g3/g, "f")
        .replace(/f1/g, "e")
        .replace(/e5/g, "d")
        .replace(/d4/g, "c")
        .replace(/1c/g, "b")
        .replace(/b2/g, "a");
}

function encriptarTexto() {
    const inputTexto = document.getElementById('inputTexto').value;
    const textoEncriptado = encriptar(inputTexto);
    document.getElementById('outputTexto').value = textoEncriptado;
    if (textoEncriptado.trim() !== "") {
        document.getElementById('copiarTexto').style.display = 'block';
    } else {
        document.getElementById('copiarTexto').style.display = 'none';
    }
}

function desencriptarTexto() {
    const inputTexto = document.getElementById('inputTexto').value;
    const textoDesencriptado = desencriptar(inputTexto);
    document.getElementById('outputTexto').value = textoDesencriptado;
    if (textoDesencriptado.trim() !== "") {
        document.getElementById('copiarTexto').style.display = 'block';
    } else {
        document.getElementById('copiarTexto').style.display = 'none';
    }
}

function copiarAlPortapapeles() {
    const textoCopiar = document.getElementById('outputTexto');
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999); // Para móviles
    document.execCommand('copy');
}
