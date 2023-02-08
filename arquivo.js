var dataCompleta; //variavel global var
dataCompleta = new Date() //instânciou a um objeto
let horaAtual = dataCompleta.getHours() //variavel local let


if (horaAtual < 12) {
    alert ("Bom dia");
} else if (horaAtual < 18) {
    alert("Boa tarde");
} else {
    alert ("Boa noite")
}

var total = 0;
var numeros = [1, 2, 3, 4, 5, 6];
for ( var i = 0; i < numeros.length; i++ ){
   total += numeros[i];
}
alert(total);