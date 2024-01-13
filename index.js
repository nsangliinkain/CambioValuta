let cambiovaluta = {
    "EUR": {
        "USD": 1.09,
        "GPB": 0.87
    },
    "USD": {
        "EUR": 0.92,
        "GPB": 0.80
    },
    "GPB":{
        "USD": 1.24,
        "EUR": 1.14
    }
}

function converti(){
    let importo = document.getElementById("importo").value;
    let valutaPartenza = document.getElementById("valutaPartenza").value;
    let valutaDestinazione = document.getElementById("valutaDestinazione").value;
    if(importo == '') alert("Inserisci un importo");
    else if (valutaPartenza == valutaDestinazione) alert("Le due valute sono identiche");
    else if(importo <= 0) alert("Importo non valido");
    else{
        tasso = cambiovaluta[valutaPartenza][valutaDestinazione];
        return importo * tasso;
    }
}

function reset(){
    document.getElementById("importo").value = "";
    document.getElementById("valutaPartenza").value = "";
    document.getElementById("valutaDestinazione").value = "";
    document.getElementById("risultato").innerHTML = "";
}
function mostraRisultato(){
    let risultato = converti();
    document.getElementById("risultato").innerHTML = "Il risultato della conversione è: " + risultato;
}