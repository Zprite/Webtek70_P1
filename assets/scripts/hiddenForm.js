/*
    Håndterer skjemadata og styling til skjemaene nyhetsbrev (index.html), jobbsøknad (contact.html) og smittesporing (covid-19.html)
*/

var hiddenForm = document.getElementById('hiddenForm').style;

document.getElementById("hiddenForm").addEventListener("submit", function(event) { // Ikke submit form
    event.preventDefault()
});

function showForm() { // Blir callet av trykk på knapp, viser skjema hvis ikke allerede vist. Hvis skjemaet er allerede vist blir det skjult.
    if (hiddenForm.display == "none") {
        hiddenForm.display = "";
    } else {
        hiddenForm.display = "none";
    }
}

function submitHiddenForm() { // Har brukeren godkjent personvernerklæringen?
    var consent = document.getElementById('consent');
    if (!consent.checked) {
        alert("Vennligst godta vår personvernerklæring.");
        consent.focus();
        return false;
    }

    // Skjuler input-fields, og viser tilbakemelding
    document.getElementById('submitForm').style.display = "none";
    consent.style.display = "none";
    document.getElementsByClassName('form-grid-1')[0].style.display = "none";
    document.getElementsByClassName('form-grid-2')[0].style.display = "none";
    document.getElementById('formReply').style.display = "";
}