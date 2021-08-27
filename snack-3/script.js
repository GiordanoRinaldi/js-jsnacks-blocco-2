//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
//lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nome = ["marco ", "luigi ", "stefano "];
var cognome = [ "rossi", "bianchi", "neri"];
var invitati = []

for (var i = 0; i < 3; i++) {
    var nomecognome = nome[Math.floor(Math.random()*3)] + cognome[Math.floor(Math.random()*3)];

    invitati.push(nomecognome);

    while (invitati[0]==invitati[1]==invitati[2]) {
        var nomecognome = nome[Math.floor(Math.random()*3)] + cognome[Math.floor(Math.random()*3)];

        invitati.push(nomecognome);
    }

}







console.log(invitati);




