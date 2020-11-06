/*
Un alert espone 5 numeri casuali diversi.

Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
NOTE:
- sempre su ex Simon, aggiungere il controllo almeno per non far inserire più volte lo stesso num da utente e non generare numeri doppioni da indovinare;

*/


//creo una lista di 5 numeri casuali fra 1 e 100(scelgo io questo intervallo) composta da numeri casuali diversi
var listaNumeri = [];
var numeroRandom;

while (listaNumeri.length < 5) {
  numeroRandom = getRandom(100);
  if (listaNumeri.indexOf(numeroRandom) === -1) {
    listaNumeri.push(numeroRandom);
  }
}

// metto i numeri in ordine (per debug)
listaNumeri.sort(compareNumbers);
//invio l'alert con la lista dei numeri
alert('Ricordati questi 5 numeri compresi tra 1 e 100 e mai ripetuti tra di loro: ' + listaNumeri);
//questo log inserito per debug
console.log('La lista da ricordare  è composto dai seguenti 5 numeri, unici tra loro: ' + listaNumeri);

//dalle documentazioni vedo che l'alert blocca il lavoro di javascript, quindi questa funzione partirà dal momento in cui viene cliccato ok sul primo alert

//setTimeout a differenza di setInteval fa eseguire questa funzione un'unica volta. setInterval ha bisogno di clearInterval.
setTimeout(function () {

  var tentativo;
  var listaNumeriRicordati = [];
  var arrayTentativiGiusti = [];
  var arrayTentativi = [];

  //condizione iniziale è che i tentativi siano 5
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
      //se il tentativo dell'utente corrisponde a uno dei numeri iniziali, si aggiunge alla lista dei numeri ricordati e alla lista dei tentativi totali (ci serve per fermare il loop al length 5)
      if (listaNumeri.includes(tentativo)) {
        arrayTentativi.push(tentativo);
        listaNumeriRicordati.push(tentativo);

        console.log('Hai inserito il numero ' + tentativo + ' che è stato accettato in quanto rispetta le condizioni richieste');
      } else {
        //se il numero inserito è valido ma non è uno di quei 5 che dovevo ricordare, lo unisco all'arrayTentativi
        arrayTentativi.push(tentativo);
        console.log('Hai inserito il numero ' + tentativo + ' che è stato accettato in quanto rispetta le condizioni richieste');


      }
      //quanti numeri l'utente ha ricordato
      var punti = listaNumeriRicordati.length;
    }
  }


  console.log('Ti sei ricordato ' + punti + ' numeri su 5');
  console.log('I numeri da ricordare erano: ' + listaNumeri);

  if (listaNumeriRicordati.length > 0) {
    console.log('I numeri che ti sei ricodato sono: ' + listaNumeriRicordati);
  } else
  console.log('Non te ne sei ricordato nemmeno uno!!!');


}, 3000); // metto 3000 ms invece di 30 000 ms per non morire di vecchiaia

//se serve jquery va qua dentro
// $(document).ready(function () {});


//funzioni generiche:
//numeri random
function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}
//numeri in ordine
function compareNumbers(a, b) {
  return a - b;
}
