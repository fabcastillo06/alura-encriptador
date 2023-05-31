function encriptar(){
    let texto=document.getElementById("texto").value;
    let tituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muneco=document.getElementById("muñeco");
    let textoCifrado=texto
                        .replace(/e/gi,"enter")
                        .replace(/i/gi,"imes")
                        .replace(/a/gi,"ai")
                        .replace(/o/gi,"ober")
                        .replace(/u/gi,"ufat")

    if(texto.length != 0){

        document.getElementById("texto").value=textoCifrado;
        tituloMensaje.textContent="Texto Encriptado con Exito!!";
        parrafo.textContent="";
        muneco.src="./img/encriptado.jpg"

    } else{

        muneco.src="./img/muñeco.jpg";
        tituloMensaje.textContent="Ningun Mensaje fue encontrado"; 
        parrafo.textContent="Ingresa el Mensaje que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto!")
    }   
}

function desencriptar(){
    let texto=document.getElementById("texto").value;
    let tituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muneco=document.getElementById("muñeco");

    let textoCifrado=texto
                        .replace(/enter/gi,"e")
                        .replace(/imes/gi,"i")
                        .replace(/ai/gi,"a")
                        .replace(/ober/gi,"o")
                        .replace(/ufat/gi,"u")

    if(texto.length != 0){
        document.getElementById("texto").value=textoCifrado;
        tituloMensaje.textContent="Texto Desencriptado con Exito!!";
        parrafo.textContent="";
        muneco.src="./img/desencriptado.jpg"; 


    }else{

        
        muneco.src="./img/muñeco.jpg";
        tituloMensaje.textContent="Ningun Mensaje fue encontrado"; 
        parrafo.textContent="Ingresa el Mensaje que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto!")


    }
}