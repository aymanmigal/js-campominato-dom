//FUNZIONE CHE GENERA NUMERO CASUALE

function generateRandomNumber (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//FUNZIONE CHE RIEMPIE L'ARRAY DI BOMBE

function fillArrayBombs(array_bombs, max){

    //CONTROLLO
    let check = false;
    let random_number;


    //SE LA VARIABILE DI CONTROLLO E' FALSE 
    while(check === false){
        //GENERO NUMERO CASUALE
        random_number = generateRandomNumber(1,max);

        //CONTROLLO SE L'ARRAY DELLE BOMBE NON INCLUDE IL NUMERO RANDOM
        if(!array_bombs.includes(random_number)){

            //SE L'ARRAY NON INCLUDE IL NUMERO, SETTO LA VARIABILE DI CONTROLLO A TRUE PER USCIRE DAL WHILE
            check = true;

        }

    }
  
    return random_number;
       
}


function createNewGame (){
    const grid = document.getElementById('grid');
    const arrayBombs = [];

    //RECUPERO IL LIVELLO DI DIFFICOLTA'
    const difficulty = parseInt(document.getElementById('difficulty').value);
    

    //rIGENERATORE GRIGLIA
    grid.innerHTML = '';


    let cellsNumber;

  switch(difficulty){
    case 1:
        cellsNumber = 100;
        break;

    case 2:
        cellsNumber = 81;
        break; 
    
    case 3:
        cellsNumber = 49;
        break;    
  }


  //INVOCO LA FUNZIONE fillArrayBombs PER RIEMPIRE L'ARRAY DI BOMBE
  for (let i=0; i < 16; i++){

  let number = fillArrayBombs(arrayBombs, cellsNumber);
  arrayBombs.push(number);

  }

  console.log(arrayBombs);


    //INVOCO FUNZIONE createCell PER CREARE LE SINGOLE CASELLE DI GIOCO
    createCells(cellsNumber);

}

//FUNZIONE CREA CASELLE GRIGLIA
function createCells (cells){

  

    // CASELLE GRIGLIA
  for(let i = 0; i < cells; i++){
    const square = document.createElement('div');

    let cellsPerRow = Math.sqrt(cells);
    


    square.classList.add('square');
    square.style.width = `calc(100% / ${cellsPerRow})`;
    square.style.height = square.style.width;
    square.innerText = i + 1;

    square.addEventListener('click', function(){
        this.classList.add('clicked');
        console.log(this.innerText);


    })

    grid.append(square);
  }


}



const button = document.getElementById('play');

button.addEventListener('click' , function(){
    
    


    //AL CLICK DEL PULSANTE SI CREA LA GRIGLIA DI GIOCO 

    createNewGame();
})