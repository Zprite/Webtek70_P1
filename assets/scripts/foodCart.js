/*

Bestillingsmodaler på menu.html, samt styling av ScrollMenu og Cart

*/

/* Modalen med bestilling */
function modalHouse() {
    var modalHouseElem = document.getElementById("modalHouseElem");
    var span = document.getElementById("closeHouse");
    modalHouseElem.style.display = "block";
    span.onclick = function() {
        modalHouseElem.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modalHouseElem) {
            modalHouseElem.style.display = "none";
        }
    }

    // Viser bestillingen til brukeren
    document.getElementById("finalDishes").innerHTML = document.getElementById("orderedDishes").innerHTML;
    document.getElementById("finalPrice").innerHTML = document.getElementById("totalPrice").innerHTML;
    renderReceipt(dishes, '#orderReceipt');
}


/* Model med lenker til takeaway */
function modalTakeaway() {
    var modalTakeawayElem = document.getElementById("modalTakeawayElem");
    var span = document.getElementById("closeTakeaway");
    modalTakeawayElem.style.display = "block";
    span.onclick = function() {
        modalTakeawayElem.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modalTakeawayElem) {
            modalTakeawayElem.style.display = "none";
        }
    }

    // Viser bestillingen til brukeren
    document.getElementById("finalDishesT").innerHTML = document.getElementById("orderedDishes").innerHTML;
    document.getElementById("finalPriceT").innerHTML = document.getElementById("totalPrice").innerHTML;
    renderReceipt(dishes, '#orderReceiptTakeaway');
}

/* JavaScript funksjonen for å åpne og lukke modalene er basert på kode fra: https://www.cssscript.com/simple-modal-window-with-background-blur-effect/ */

/* Styling: Brukeren må ha scrollet ned 300px før ScrollMenu og Cart vises */
/* og skjuler før den når footer */
window.onscroll = function() {

    // document.body er <body>. document.documentElement er <html>. Velger den lengste av disse to, da forskjellige nettlesere gir forskjellig lengde
    var userScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    var bodyLength = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    var footerLength = bodyLength - userScroll;

    if (userScroll > 300 && footerLength > 1000) {
        document.querySelector(".orderSection").style.visibility = "visible";
        document.querySelector("#scrollMenu").style.visibility = "visible";
    } else {
        document.querySelector(".orderSection").style.visibility = "hidden";
        document.querySelector("#scrollMenu").style.visibility = "hidden";
    }
}