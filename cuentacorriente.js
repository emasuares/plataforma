var emp=localStorage.getItem('empresa');
var numero=parseInt(localStorage.getItem('numeroCliente'));
let maximo=0;
let cantidad=0;
var tipo=localStorage.getItem('FactRem');


const arcorFact=[
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10001 ,importe:23000},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10002 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10003 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10004 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10005 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10006 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10007 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10008 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10009 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10010 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10011 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10012 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10013 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10014 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10015 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10016 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10017 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10018 ,importe:2300},
]

const cocacolaFact=[
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10019 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10020 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10021 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10022 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10023 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10024 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10025 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10026 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10027 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10028 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10029 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Pago",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10030 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10031 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10032 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Pago",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10033 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10034 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10035 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10036 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10037 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Pago" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10038 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10039 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10040 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10041 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10042 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10043 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10044 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10045 ,importe:2300},
]
const swiftFact=[
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10046 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10047 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10048 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10049 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10050 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10051 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10052 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10053 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10054 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10055 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10056 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10057 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10058 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10059 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10100 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10101 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10102 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10103 ,importe:2300},
]
const patyFact=[
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10104 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10105 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10106 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10107 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10108 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10109 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10110 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10111 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10112 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10113 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10114 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10115 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10116 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10117 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10118 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10119 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10120 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10121 ,importe:2300},
]
const laysFact=[
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10122 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10123 ,importe:2300},
    {id:4, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10124 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10125 ,importe:2300},
    {id:4, fecha:"28/03/22", tipo:"Factura",numero: 10126 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10127 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10128 ,importe:2300},
    {id:4, fecha:"20/02/22", tipo:"Factura",numero: 10129 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10130 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10131 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10132,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10133 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10134 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10135 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10136 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10137 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10138 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10139 ,importe:2300},
]
const bimboFact=[
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10140 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10141,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10142 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10143 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10144 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10145 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10146 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10147 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10148 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Factura" ,numero: 10149 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Factura",numero: 10150 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Factura",numero: 10151 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Factura",numero: 10152 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Factura",numero: 10153 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Factura",numero: 10154 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Factura",numero: 10155 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Factura",numero: 10156 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Factura",numero: 10157 ,importe:2300},
]
const arcorRem=[
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25000 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25001 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25002 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25003 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25004 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25005 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25006 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25007 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25008 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25009 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25010 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25011 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25012 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25013 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25014 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25015 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25016 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25017 ,importe:2300},
]

const cocacolaRem=[
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25018 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25019 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25020 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25021 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25022 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25023 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25024 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25025 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25026 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25027 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25028 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25029 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25030 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25031 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25032 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25033 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25034 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25035 ,importe:2300},
]
const swiftRem=[
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25036 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25037 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25038 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25039 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25040 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25041 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25042 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25043 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25044 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25045 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25046 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25047 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25048 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25049 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25050 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25051 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25052 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25053 ,importe:2300},
]
const patyRem=[
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25054 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25055 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25056 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25057 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25058 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25059 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"remito",numero: 25060 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25061 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25062 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25063 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25064 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25065 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25066 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25067 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25068 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25069 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25070 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25071 ,importe:2300},
]
const laysRem=[
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25072 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25073 ,importe:2300},
    {id:4, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25074 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25075 ,importe:2300},
    {id:4, fecha:"28/03/22", tipo:"Remito",numero: 25076 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25077 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25078 ,importe:2300},
    {id:4, fecha:"20/02/22", tipo:"Remito",numero: 25079 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25080 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25081 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25082 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25083 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25084 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25085 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25086 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25087 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25088 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25089 ,importe:2300},
]
const bimboRem=[
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25090 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25091 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25092 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25093 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25094 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25095 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-23000},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25096 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25097 ,importe:2300},
    {id:1, fecha:"25/02/22", tipo:"Remito" ,numero: 25098 ,importe:2300},
    {id:1, fecha:"26/02/22", tipo:"Nota de Credito" ,numero: 25365 ,importe:-2300},
    {id:2, fecha:"27/02/22", tipo:"Remito",numero: 25099 ,importe:2300},
    {id:1, fecha:"28/02/22", tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:3, fecha:"30/02/22", tipo:"Remito",numero: 25100 ,importe:2300},
    {id:6, fecha:"25/03/22", tipo:"Remito",numero: 25101 ,importe:2300},
    {id:5, fecha:"28/03/22", tipo:"Remito",numero: 25102 ,importe:2300},
    {id:5, fecha:"30/03/22", tipo:"Nota de Credito",numero: 25365, importe:-2300},
    {id:4, fecha:"02/04/22", tipo:"Remito",numero: 25103 ,importe:2300},
    {id:1, fecha:"10/02/22", tipo:"Remito",numero: 25104 ,importe:2300},
    {id:3, fecha:"20/02/22", tipo:"Remito",numero: 25105 ,importe:2300},
    {id:1, fecha:"25/02/22",tipo:"Nota de Credito",numero: 25365 ,importe:-2300},
    {id:2, fecha:"26/02/22", tipo:"Remito",numero: 25106 ,importe:2300},
]

function IrAPago(){
    var j = this.classList;
    JSON.stringify(localStorage.setItem('numeroPago',j));
    window.location.href='pago.html';
}

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


function genera_tabla(a,b,c) {
    let sumador=0;
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
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      if (c[i].id==numero){
          sumador+=c[i].importe;
          console.log(sumador);
          console.log(numero);
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
            var celda = document.createElement("td");
            celda.classList.add("table-dark")
            var textoCelda = document.createTextNode("Fecha: "+c[i].fecha);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            var celda = document.createElement("td");
            celda.classList.add("table-dark")
            if (c[i].tipo=="Pago"){
                hilera.addEventListener('click',IrAPago);
                hilera.classList.add(c[i].numero);
            }
            var textoCelda = document.createTextNode("Tipo: "+c[i].tipo);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            var celda = document.createElement("td");
            celda.classList.add("table-dark")
            var textoCelda = document.createTextNode("N° "+c[i].numero);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            var celda = document.createElement("td");
            celda.classList.add("table-dark")
            var textoCelda = document.createTextNode("$ "+c[i].importe);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            
      }
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
    var hilera = document.createElement("tr");
    var celda = document.createElement("td");
            celda.classList.add("table-dark")
            var textoCelda = document.createTextNode("");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            var celda = document.createElement("td");
            celda.classList.add("table-dark")
            var textoCelda = document.createTextNode("");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            var celda = document.createElement("td");
            celda.classList.add("table-dark")
            var textoCelda = document.createTextNode("Estado de Cuenta: ");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            var celda = document.createElement("td");
            celda.classList.add("table-dark")
            var textoCelda = document.createTextNode("$ "+sumador);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            tblBody.appendChild(hilera);

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
 
  }


if (emp=="Arcor" && tipo=="Factura"){
    console.log(emp);
    maximo=arcorFact.length;
    cantidad=Object.keys(arcorFact[0]).length;
    genera_tabla(maximo,cantidad,arcorFact);


}else if (emp=="Arcor" && tipo=="Remito"){
    console.log(emp);
    maximo=arcorRem.length;
    cantidad=Object.keys(arcorRem[0]).length;
    genera_tabla(maximo,cantidad,arcorRem);
}else if (emp=="CocaCola" && tipo=="Factura"){
    console.log(emp);
    maximo=cocacolaFact.length;
    cantidad=Object.keys(cocacolaFact[0]).length;
    genera_tabla(maximo,cantidad,cocacolaFact);


}else if (emp=="CocaCola" && tipo=="Remito"){
    console.log(emp);
    maximo=cocacolaRem.length;
    cantidad=Object.keys(cocacolaRem[0]).length;
    genera_tabla(maximo,cantidad,cocacolaRem);


}else if (emp=="Swift" && tipo=="Factura"){
    console.log(emp);
    maximo=swiftFact.length;
    cantidad=Object.keys(swiftFact[0]).length;
    genera_tabla(maximo,cantidad,swiftFact);


}else if (emp=="Swift" && tipo=="Remito"){
    console.log(emp);
    maximo=swiftRem.length;
    cantidad=Object.keys(swiftRem[0]).length;
    genera_tabla(maximo,cantidad,swiftRem);


}else if (emp=="Paty" && tipo=="Factura"){
    console.log(emp);
    maximo=patyFact.length;
    cantidad=Object.keys(patyFact[0]).length;
    genera_tabla(maximo,cantidad,patyFact);

}else if (emp=="Paty" && tipo=="Remito"){
    console.log(emp);
    maximo=patyRem.length;
    cantidad=Object.keys(patyRem[0]).length;
    genera_tabla(maximo,cantidad,patyRem);

}else if (emp=="Lays" && tipo=="Factura"){
    console.log(emp);
    maximo=laysFact.length;
    console.log(maximo);
    cantidad=Object.keys(laysFact[0]).length;
    console.log(cantidad);
    genera_tabla(maximo,cantidad,laysFact);


}else if (emp=="Lays" && tipo=="Remito"){
    console.log(emp);
    maximo=laysRem.length;
    console.log(maximo);
    cantidad=Object.keys(laysRem[0]).length;
    console.log(cantidad);
    genera_tabla(maximo,cantidad,laysRem);


}else if (emp=="Bimbo" && tipo=="Factura"){
    console.log(emp);
    maximo=bimboFact.length;
    cantidad=Object.keys(bimboFact[0]).length;
    genera_tabla(maximo,cantidad,bimboFact);
}else if (emp=="Bimbo" && tipo=="Remito"){
    console.log(emp);
    maximo=bimboRem.length;
    cantidad=Object.keys(bimboRem[0]).length;
    genera_tabla(maximo,cantidad,bimboRem);
}

/*let max=cuentaCorrienteEmp1.length;
let maxClientes=clientes.length;
let cantObj=Object.keys(clientes[0]).length;
let sumador=0;



function sumarImporte(numero){
    for (i=0;i<max;i++){
        if (cuentaCorrienteEmp1[i].id==numero){
        document.write("  "+cuentaCorrienteEmp1[i].tipo+"  $"+cuentaCorrienteEmp1[i].importe);
        sumador+=cuentaCorrienteEmp1[i].importe;
        }
    }
}*/