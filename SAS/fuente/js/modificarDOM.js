//clonar nodos
let elemento = document.createElement("section");

let elementoClonado= elemento.cloneNode(true);
console.log(elemento.isConnected);

//crear una estructura temporal para añadirla al DOM mas tarde
document.createDocumentFragment();

//Insertar nodos

//Node API -> antigua

//appenndChild//
nodoreferencia.appendChild(new_node);

//insertbefore//

Seccion.appendChild(comentario);
seccion.appendChild(texto);

let puntoInsercion= document.getElementsByTagName("section");
puntoInsercion[0].appendChild(seccion);
//Element API -> solo usar de esta

