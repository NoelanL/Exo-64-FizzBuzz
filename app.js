let number3 = 3;
let number5 = 5;

for (let nombre = 1; nombre <= 100; nombre++) {

    if ((nombre % number3) === 0 && (nombre % number5) === 0) {
        console.log(nombre + " => \"fizzbuzz\"");
    }

    else if ((nombre % number3) === 0) {
        console.log(nombre + " => \"fizz\"");
    }

    else if ((nombre % number5) === 0) {
        console.log(nombre + " => \"buzz\"");
    }

    else {
        console.log(nombre + " => " + nombre);
    }

}