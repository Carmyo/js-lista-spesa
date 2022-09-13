console.log('JS ok');

/*
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

*/

const list = ['banana', 'mele', 'crostatine', 'formaggio', 'salame', 'pane'];
const divhtml = document.querySelector('.container');
let counter = 0;

while (counter < list.length) {
    console.log(list[counter]);
    divhtml.innerHTML += `<div>
                          ${list[counter]}
                          </div>`





    counter++;
}

console.log('end')