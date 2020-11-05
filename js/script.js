/*

- Un alert espone 5 numeri casuali
  diversi.

- Dopo 30 secondi l'utente deve
  inserire, un prompt alla volta, i
  numeri che ha visto precedentemente.

- Una volta inseriti i 5 numeri,
  il software dice quanti e quali
  numeri sono stati ricordati.

- Consigli del giorno:
  * Pensate prima in italiano.
  * Dividete in piccoli problemi
    la consegna.
  * Individuate gli elementi
    di cui avete bisogno per
    realizzae il programma.

*/


/* Un alert espone 5 numeri casuali diversi. */
var RANDOM_NUMBERS = 5
var casualNum = [] ;

while (casualNum.length < RANDOM_NUMBERS){
   var num =  (Math.floor(Math.random() * 99)+ 1) ; //genera un numero da 1 a 100
   if(!isInArray (num, casualNum)){
      casualNum.push(num);
     }
}

alert(casualNum);
console.log(casualNum)

/*Dopo 30 secondi l'utente deve
  inserire, un prompt alla volta, i
  numeri che ha visto precedentemente.*/

var userNum = [];

setTimeout(function(){

  while (userNum.length < RANDOM_NUMBERS){
     var insertNum = prompt('INSERISCI UN NUMERO')
     userNum.push(insertNum);
  }


   console.log(userNum);

//Una volta inseriti i 5 numeri,
//il software dice quanti e quali
//numeri sono stati ricordati
   var howMany = 0;
   var whatAre = [];

   for( i=0 ; i < userNum.length ; i++){
     var userNumEl = userNum[i];
     console.log (userNumEl)
     if (isInArray(userNumEl, casualNum)){
     howMany += 1;
     whatAre.push(userNumEl);
      }
    }

     console.log (whatAre)
console.log (howMany)
$('#result_how_many').html('Sono stati trovati ' + howMany + ' numeri')
$('#result_what_are').html('Hai trovato: ' + whatAre)

}, 5000)










//Funzione per controllare che non inserisca doppioni
function isInArray(inputNum, arrayNum){
   for(var i = 0; i < arrayNum.length; i++) {
     if(inputNum === arrayNum[i]){
       return true;
     }
   }
   return false;
}
