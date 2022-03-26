//Faccio scrivere all'utente il suo nome con html
//Creo il btn del click in html
//Prendo il nome scritto dall'utente e lo metto dentro il div.testo_nome al click
document.getElementById("btn_click").addEventListener("click", scrivinome)

function scrivinome() {
    const elementNome = document.getElementById('nome_utente').value;
    document.getElementById('testo_nome').innerHTML = elementNome;


    //Faccio scrivere all'utente quanti km vuole percorrere con html
    //Prendo i km scritti dall'utente e li metto dentro una variabile (kmFatti)
    const kmFatti = document.getElementById('km_utente').value;

    //Chiedo all'utente lo status con html e lo salvo in una variabile
    const elementStatus = document.getElementById('eta').value;


    /*
    CALCOLO IL PREZZO
    */
    //Creo gli sconti
    const scontoMinorenni = 0.2;
    const scontoOver = 0.4;

    //Creo una variabile (euroKm) che indica il P. unitario al km
    const euroKm = 0.21;

    //Calcolo il prezzo della corsa senza sconti
    const prezzoCorsa = kmFatti * euroKm;

    //Creo il prezzo finale
    let prezzoFinale = prezzoCorsa;

    if (elementStatus == "minorenne") {
        document.getElementById('tipologia').innerHTML = 'Sconto minorenni'
        prezzoFinale = prezzoCorsa - (prezzoCorsa * scontoMinorenni);
        document.getElementById('finale').innerHTML = 'euro' + prezzoFinale.toFixed(2)
    } else if (elementStatus == "over65") {
        document.getElementById('tipologia').innerHTML = 'Sconto over'
        prezzoFinale = prezzoCorsa - (prezzoCorsa * scontoOver);
        document.getElementById('finale').innerHTML = 'euro' + prezzoFinale.toFixed(2)
    } else {
        document.getElementById('tipologia').innerHTML = 'Nessun sconto'
        prezzoFinale = prezzoCorsa;
        document.getElementById('finale').innerHTML = 'euro' + prezzoFinale.toFixed(2)
    }

    //Creo valori casuali delle carrozze e numeri CP
    const elementCarrozza = Math.floor(Math.random() * 10 + 1)
    document.getElementById('carrozza').innerHTML = elementCarrozza

    const elementcodicecp = Math.floor(Math.random() * 1000 + 100)
    document.getElementById('codicecp').innerHTML = elementcodicecp
}

//Creo un btn di anulla in html
document.getElementById("btn_click_annulla").addEventListener("click", annulla)

function annulla() {
    document.getElementById('nome_utente').value = ''
    document.getElementById('testo_nome').value = ''
    document.getElementById('km_utente').value = ''
    document.getElementById('eta').value = ''
    document.getElementById('tipologia').innerHTML = ''
    document.getElementById('finale').innerHTML = ''
    document.getElementById('carrozza').innerHTML = ''
    document.getElementById('codicecp').innerHTML = ''
}