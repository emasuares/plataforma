  var x=JSON.parse(localStorage.getItem('numeroCliente'));


  const empresas=[
    {id:0 , emp1:"Arcor" , emp2:"CocaCola" ,emp3:"Swift" ,emp4:"Paty" ,emp5:"Lays",emp6:"Bimbo"},
    {id:1 , emp1:"Arcor" , emp2:"CocaCola" ,emp3:"Swift" ,emp4:"Paty" ,emp5:"Lays",emp6:"Bimbo"},
    {id:2 , emp1:"Arcor" , emp2:"CocaCola" ,emp3:"Swift" ,emp4:"Paty" ,emp5:"Lays",emp6:"Bimbo"},
    {id:3 , emp1:"Arcor" , emp2:"CocaCola" ,emp3:"Swift" ,emp4:"Paty" ,emp5:"Lays",emp6:"Bimbo"},
    {id:4 , emp1:"Arcor" , emp2:"CocaCola" ,emp3:"Swift" ,emp4:"Paty" ,emp5:"Lays",emp6:"Bimbo"},
    {id:5 , emp1:"Arcor" , emp2:"CocaCola" ,emp3:"Swift" ,emp4:"Paty" ,emp5:"Lays",emp6:"Bimbo"},
  ];


  var p ="";
  let maxClientes=empresas.length;
  let cantObjetos=Object.keys(empresas[0]).length;
  console.log(x);
  console.log(maxClientes);
  console.log(cantObjetos);

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

  
 function Redireccionar(){
    var p = this.classList;
    JSON.stringify(localStorage.setItem('empresa',p));
    window.location.href='opciones.html';
  };


  function genera_tabla(a,b,) {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.setAttribute("id","datos");
    tabla.classList.add("table");
    tabla.classList.add("table-dark");
    tabla.classList.add("table-hover");
    var tblBody = document.createElement("tbody");
    // Crea las celdas
    for (var i = 0; i < a; i++) {
      if (empresas[i].id==x){
        var hilera = document.createElement("tr");
        hilera.addEventListener('click',Redireccionar);
        hilera.classList.add(empresas[0].emp1);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(empresas[i].emp1);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
        var hilera = document.createElement("tr");
        hilera.addEventListener('click',Redireccionar);
        hilera.classList.add(empresas[0].emp2);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(empresas[i].emp2);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
        var hilera = document.createElement("tr");
        hilera.addEventListener('click',Redireccionar);
        hilera.classList.add(empresas[0].emp3);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(empresas[i].emp3);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
        var hilera = document.createElement("tr");
        hilera.addEventListener('click',Redireccionar);
        hilera.classList.add(empresas[0].emp4);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(empresas[i].emp4);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
        var hilera = document.createElement("tr");
        hilera.addEventListener('click',Redireccionar);
        hilera.classList.add(empresas[0].emp5);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(empresas[i].emp5);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
        var hilera = document.createElement("tr");
        hilera.addEventListener('click',Redireccionar);
        hilera.classList.add(empresas[0].emp6);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(empresas[i].emp6);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tblBody.appendChild(hilera);
      }
     
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
 
  }



  

  genera_tabla(maxClientes,cantObjetos);