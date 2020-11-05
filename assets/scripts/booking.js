/*
    JavaScript brukes til formvalidering og interaktivt bookingskjema på booking.html
*/

/* Input-field: Date */
// Tillater bare reservasjoner fra dagens dato og en måned frem i tid
var dateInput = document.getElementById('date');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var mmtwo = today.getMonth() + 2;
var yyyy = today.getFullYear();
var time = today.getHours();

// Legger til 0 foran tallet hvis verdien er {1-9}
if (dd < '10') {
    dd = '0' + dd;
};
if (mm < '10') {
    mm = '0' + mm;
};
if (time < '10') {
    time = '0' + time;
};
dateInput.setAttribute('value', yyyy + '-' + mm + '-' + dd);
dateInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);
dateInput.setAttribute('max', yyyy + '-' + mmtwo + '-' + dd);


/* Submit Bookingskjema */
var formPart1 = document.getElementById('formPart1');
var formPart2 = document.getElementById('formPart2');
var formPart3 = document.getElementById('formPart3');

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault()
});

function goPart1() { // Steg 2 i bookingen. Se igjennom booking.
    formPart1.style.display = "none";
    formPart2.style.display = "";

    var finalOutput = document.getElementById('finalOutput');
    var inputName = document.getElementById('name').value;
    var inputPhone = document.getElementById('phone').value;
    var inputQuantity = document.getElementById('quantity').value;
    if (inputQuantity == 1) { // Entall eller flertall
        inputQuantity = inputQuantity + " person"
    } else {
        inputQuantity = inputQuantity + " personer"
    }
    var inputDate = document.getElementById('date').value;
    var inputTime = document.getElementById('time').value;
    inputDate = new Date(inputDate);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    inputDate = inputDate.toLocaleDateString('nb-NO', options); // Gjør om datofeltet til norsk dato

    finalOutput.innerHTML = inputName + " - tlf. " + inputPhone + "<br />Reservasjon for " + inputQuantity + ", " + inputDate + ", kl. " + inputTime + ".<br />";
};

function backPart2() { // Ønsker å gå tilbake til Part 1
    formPart2.style.display = "none";
    formPart1.style.display = "";
};

function goPart2() { // Bekreftelse på at bookingen er gjennomført
    var consent = document.getElementById('consent');
    if (!consent.checked) {
        alert("Vennligst godta vår personvernerklæring.");
        consent.focus();
        return false;
    }

    formPart2.style.display = "none";
    formPart3.style.display = "";
};

function sisterVisit() { // Besøk en av våre søsterresturanter, vis del
    var sisterResturants = document.getElementById('sisterResturants').style;
    if (sisterResturants.display == "none") {
        sisterResturants.display = "";
    } else {
        sisterResturants.display = "none";
    }
}