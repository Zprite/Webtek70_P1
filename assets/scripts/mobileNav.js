/*
  Brukes på alle sider. Lar mobilbrukere (enheter med liten skjermstørrelse) åpne og lukke navbar.
*/

function toggleNav(elem) {
    elem.classList.toggle("change");
    document.getElementById("navigation").classList.toggle("show");
}