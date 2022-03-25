//chiedo all'utente come si chiama
const fullName = prompt('Come ti chiami?')
console.log(fullName);

//richiamo il nome dell'utente nella mia pagina html
//seleziono l'elemento della pagina
const elementName = document.querySelector('.nomeCognomeVuoto')
    //richiamo il nome
elementName.innerHTML = fullName



//chiedo all'utente i km da percorrere
const kmDaPercorrere = prompt('Quanti km devi percorrere?')
console.log(kmDaPercorrere);

//richiamo i km nella mia pagina html
//seleziono l'elemento della pagina
const elementKm = document.querySelector('.km')
    //richiamo il nome
elementKm.innerHTML = kmDaPercorrere

//funzione nome
function myFunction() {
    document.querySelector("fullName").value = "fullName";
}