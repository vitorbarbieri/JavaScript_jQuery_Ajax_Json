//  undefined

var undf;
console.log(undf);
console.log("Type: " + typeof undf);

var nome = "Pedro";
console.log(nome[0]); // O console mostrará "P"
console.log(nome[4]); // O console mostrará "o"
console.log(nome[10]); // O console mostrará undefined

//  null

var temperatura = 35;
console.log(temperatura);

temperatura = null;
console.log(temperatura); // O console mostrará null

//  null x undefined

console.log(temperatura == undefined);
console.log(temperatura === undefined);
console.log("Type: " + typeof temperatura);