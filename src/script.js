import Impuesto from "./impuestos.js";
import Cliente from "./cliente.js";

let impuesto = new Impuesto(300, 20);
console.log(
  `El impuesto: ${impuesto._brutAnual} , deducciones : ${impuesto._deducciones}`
);

let cliente = new Cliente("Salo", impuesto);
console.log(
  `cliente : ${cliente._nombre} impuestos : ${cliente.calcularImpuesto()}`
);