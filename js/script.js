/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
NOTE:
- sempre su ex Simon, aggiungere il controllo almeno per non far inserire più volte lo stesso num da utente e non generare numeri doppioni da indovinare;
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzae il programma.
* Pensate bene ai tempi di esecuzione per non perdervi e quindi quando una cosa deve essere eseguita e quindi dove va messa logicamente.

*/

/*
1- creare array di 5 numeri casuali (no doppioni)
1- alert espone 5 numeri casuali

all'ok parte un timer di 30 secondi (far aspettare all'utente 30 secondi
non viene richiesto di farlo vedere all'utente questo orologio ticchettante

esce un prompt dove chiedo un numero del gruppo dei casuali
esce un prompt dove chiedo un numero del gruppo dei casuali
esce un prompt dove chiedo un numero del gruppo dei casuali
esce un prompt dove chiedo un numero del gruppo dei casuali
esce un prompt dove chiedo un numero del gruppo dei casuali

gli dico quanti e quali ho azzeccato



potrei creare un array azzeccati e da li usare arraylenght per quanti, come punti

potrei fare che non puo inserire numeri gia inseriti o numeri fuori da limite o non numeri

copiaincolla campo minato
*/


//creo una lista di 5 numeri casuali fra 1 e 100 composta da numeri casuali non ripetuti
var listaNumeri = [];
var numeroRandom;

while (listaNumeri.length < 5) {
  numeroRandom = getRandom(100);
  if (listaNumeri.indexOf(numeroRandom) === -1) {
    listaNumeri.push(numeroRandom);
  }
}

// metto i numeri in ordine (non necessario, ma mi è comodo quando controllo se funziona la condizione nessun doppione)
listaNumeri.sort(compareNumbers);
//invio l'alert con la lista dei numeri
alert('Ricordati questi 5 numeri compresi tra 1 e 100 e mai ripetuti tra di loro: ' + listaNumeri)
console.log('La lista da ricordare  è composto dai seguenti 5 numeri, unici tra loro: ' + listaNumeri);


//dalle documentazioni vedo che l'alert blocca il lavoro di javascript, quindi questa funzione partirà dal momento in cui viene cliccato ok sul primo alert
setInterval(function () {

  var tentativo;
  var listaNumeriRicordati = [];
  var arrayTentativiGiusti = [];
  var arrayTentativi = [];



  //condizione iniziale è che i tentativi validi siano < 5 volte e che var di appoggio sia falsa
  while (arrayTentativi.length < 5) {
    var tentativo = parseInt(prompt('Inserisci un numero da 1 a 100'));

    //condizioni:
    //se l'utente inserisce due volte lo stesso numero gli si chiede di metterne un altro
    if (arrayTentativi.includes(tentativo)) {
      alert('Hai inserito due volte lo stesso numero, riprova con un numero diverso!');
      console.log('Hai inserito due volte lo stesso numero, riprova con un numero diverso!');

    // se utente mette un numero non compreso tra 1 e 100 gli si chiede di metterne un altro
    } else if ((tentativo < 1) || (tentativo > 100)) {
      alert('hai inserito un numero non valido. Riprova con un altro tra 1 e 100');
      console.log('hai inserito un numero non valido, il:' + tentativo + ' che è inferiore a 1 o superiore a 100. Ti permettiamo di continuare a giocare ma fai attenzione!');

    // se utente usa caratteri non numerici gli chiedo di riprovare
    } else if (isNaN(tentativo)) {
      alert('Usa solo caratteri numerici!')
      console.log('Devi inserire un numero, non usare lettere o simboli!');

    // se non succedono queste condizioni qua sopra allora si va al gico vero e proprio
    } else {
      //il tentativo dell'utente corrisponde a uno dei numeri random bombe. si aggiunge alla lista dei numeri ricordati
      if (listaNumeri.includes(tentativo)) {
        arrayTentativi.push(tentativo);
        listaNumeriRicordati.push(tentativo);

        console.log('Hai inserito il numero ' + tentativo + ' che è stato accettato in quanto rispetta le condizioni richieste');
        // appoggio = true;
      } else {
        //il numero inserito è valido ma non è uno di quei 5 che dovevo ricordare
        arrayTentativi.push(tentativo);
        // arrayTentativiSbagliati.push(tentativo);
        console.log('Hai inserito il numero ' + tentativo + ' che è stato accettato in quanto rispetta le condizioni richieste');


      }
      var punti = listaNumeriRicordati.length;


    }




    // appoggio = true;
  }


  console.log('Ti sei ricordato ' + punti + ' numeri su 5');
  console.log('I numeri che ti sei ricodato: ' + listaNumeriRicordati);
  console.log('I numeri da ricordare erano: ' + listaNumeri);



}, 3000);






//se serve jquery va qua dentro
// $(document).ready(function () {});


//funzioni generiche:
function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

function compareNumbers(a, b) {
  return a - b;
}
