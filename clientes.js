

const clientes=[
    {id:1, nombre:"Roberto"},
    {id:2, nombre:"Jose"},
    {id:3, nombre:"Juan"},
    {id:4, nombre:"Carlos"},
    {id:5, nombre:"Guillermo"},
    {id:6, nombre:"Martin"},
]



let maxClientes=clientes.length;
let cantObj=Object.keys(clientes[0]).length;




function doSearch()

        {

            const tableReg = document.getElementById('datos');

            const searchText = document.getElementById('searchTerm').value.toLowerCase();

            let total = 0;

 

            // Recorremos todas las filas con contenido de la tabla

            for (let i = 0; i < tableReg.rows.length; i++) {

                // Si el td tiene la clase "noSearch" no se busca en su cntenido

                if (tableReg.rows[i].classList.contains("noSearch")) {

                    continue;

                }

 

                let found = false;

                const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');

                // Recorremos todas las celdas

                for (let j = 0; j < cellsOfRow.length && !found; j++) {

                    const compareWith = cellsOfRow[j].innerHTML.toLowerCase();

                    // Buscamos el texto en el contenido de la celda

                    if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {

                        found = true;

                        total++;

                    }

                }

                if (found) {

                    tableReg.rows[i].style.display = '';

                } else {

                    // si no ha encontrado ninguna coincidencia, esconde la

                    // fila de la tabla

                    tableReg.rows[i].style.display = 'none';

                }

            }

 

            // mostramos las coincidencias

            const lastTR=tableReg.rows[tableReg.rows.length-1];

            const td=lastTR.querySelector("td");

            lastTR.classList.remove("hide", "red");

            if (searchText == "") {

                lastTR.classList.add("hide");

            }

        }



function handleRedirect (){
  var p=parseInt(this.classList);
  JSON.stringify(localStorage.setItem('numeroCliente',p));
  window.location.href='empresas.html';
}


function genera_tabla(a,b,) {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    let classNumber="";
    
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.setAttribute("id","datos");
    tabla.classList.add("table");
    tabla.classList.add("table-dark");
    tabla.classList.add("table-hover");
    var tblBody = document.createElement("tbody");
  

    // Crea las celdas
    for (var i = 0; i < a; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      hilera.addEventListener('click',handleRedirect);
      classNumber=String(i);
      hilera.classList.add(classNumber);
      
      
      
      for (var j = 0; j < b; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
          if (j==0){
          var celda = document.createElement("td");
          celda.classList.add("table-dark");
          var textoCelda = document.createTextNode(clientes[i].id);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
          }else if (j==1){
          var celda = document.createElement("td");
          celda.classList.add("table-dark")
          var textoCelda = document.createTextNode(clientes[i].nombre);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
          }
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
 
  }

 


  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Acceso Exitoso!'
  })
  genera_tabla(maxClientes,cantObj);
 

