// inserisci un numero se pari stampa se dispari stampa quello dopo

var numero = parseInt(prompt("inserisci un numero"));
if (isNaN(numero)) {
    var numero = parseInt(prompt("inserisci un c***o di numero"));
}

if ( numero%2 == 0 ) {
    alert(numero);
} else {
    alert(numero + 1 );
}