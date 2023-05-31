PROBLEMA: Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


PARTE 1
1.CREARE UNA FUNZIONE CHE GENERA UN NUMERO RANDOM;
2.CREARE ARRAY PER BOMBE;
 2.1 GENERO IL NUMERORO CASUALE;
 2.2 ?SE IL NUMERONEN E' INCLUSO NELL'ARRAY, LO INCLUDO;
 2.3 ALTRIMENTI PROSEGUO FINO A 16 NUMERI


 PARTE 2
 1.AL CLICK CONTROLLARE SE E' UNA BOMBA
 2.? SE IL NUMERO CLICCATO E' UNA BOMBA COLORARE LA CASELLA DI ROSSO E VIETARE UN ALTRO CLICK
 3.ALTRIMENTI COLORA LA CASELLA DI AZZURRO E IL GIOCO VA AVANTI

