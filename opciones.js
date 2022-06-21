

function GoTo(){
  var opcion=this.classList;
  JSON.stringify(localStorage.setItem('FactRem',opcion));
  window.location.href='cuentacorriente.html';
}


function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-dark");
    tabla.classList.add("table-hover");
    var tblBody = document.createElement("tbody");
    // Crea las celdas
    
        var hilera = document.createElement("tr");
        hilera.addEventListener('click',GoTo);
        hilera.classList.add("Remito");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Remito");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
        var hilera = document.createElement("tr");
        hilera.addEventListener('click',GoTo);
        hilera.classList.add("Factura");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Factura");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
     
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
 
  }
  genera_tabla();