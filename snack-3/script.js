//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
//lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nome = ["marco ", "luigi ", "stefano "];
var cognome = [ "rossi", "bianchi", "neri"];
var invitati = []

//for (var i = 0; i < 3; i++) {
//    var nomecasuale = parseInt(Math.random() * nome.length);
//    var cognomecasuale = parseInt(Math.random() * cognome.length);
//
//    invitati.push(nome[nomecasuale] + cognome[cognomecasuale]);
//}


while(invitati.length < 3) {
    var nomecasuale = parseInt(Math.random() * nome.length);
    var cognomecasuale = parseInt(Math.random() * cognome.length);

    invitati.push(nome[nomecasuale] + cognome[cognomecasuale])

}


console.log(invitati);




