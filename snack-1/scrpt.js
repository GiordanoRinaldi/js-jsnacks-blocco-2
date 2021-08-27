//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while. 

//var somma = 0;

//for (var i = 1; i <= 5; i++) { 
//    var numeroUtente = parseInt(prompt("inserisci un numero")) ;
//    var somma = somma + numeroUtente;
//}

//console.log(somma);

//  while

var somma = 0;
var i = 0;

while (i < 5) {
    var numero = parseInt(prompt("inserisci un numero"))
    var somma = somma + numero;
    i++;
}

console.log(somma);
