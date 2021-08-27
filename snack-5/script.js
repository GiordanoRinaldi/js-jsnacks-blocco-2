//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi casuali all’array che ha meno elementi,
//fino a quando ne avrà tanti quanti l’altro.

var a = [0,1,2,];

var b = [0,1,2,3,4,5];

while (a.length < b.length) {
    a.push( (Math.floor (Math.random() * 5) ) );
}


console.log(a)

console.log(b)


