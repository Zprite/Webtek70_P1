const nav =
    '<div class="nav-col flex">\
<ul class="noList">\
    <li>\
        <img src="assets/images/icons/location.png" alt="Location">\
        <a href="https://www.google.com/maps/place/Kristiansten+festning/@63.4262262,10.4110418,17z/data=!4m5!3m4!1s0x0:0xaf189e2e4edc5934!8m2!3d63.4269223!4d10.4106094" target="_blank" rel="nofollow">Kristianstensbakken 70</a>\
    </li>\
    <!--Kilde til ikon: https://toppng.com/show_download/175888/white-directions-icon-location-flat-icon-white/large-->\
    <li>\
        <img src="assets/images/icons/facebook.png" alt="Facebook">\
        <a href="#" target="_blank" rel="nofollow">Følg oss på Facebook</a>\
    </li>\
    <!--Kilde til ikon: https://freepikpsd.com/fb-white-png-transparent-images/787586/-->\
    <li>\
        <img src="assets/images/icons/mail.png" alt="Mail">\
        <a href="mailto:post@prietzeria.xyz">post@prietzeria.xyz</a>\
    </li>\
    <!--Kilde til ikon: https://toppng.com/show_download/182525/mail-white-icon/large-->\
</ul>\
<div class="hamburger-container" onclick="toggleNav(this)">\
    <div class="bar1"></div>\
    <div class="bar2"></div>\
    <div class="bar3"></div>\
</div>\
<nav id="navigation" class="hide">\
    <ul class="nav-items">\
        <li id="homeLink">\
            <a href="index.html">Hjem</a>\
        </li>\
        <li id="menuLink">\
            <a href="menu.html">Meny</a>\
        </li>\
        <li id="bookingLink">\
            <a href="booking.html">Book bord</a>\
        </li>\
        <li id="contactLink">\
            <a href="contact.html">Om oss</a>\
        </li>\
    </ul>\
</nav>\
</div>';

function setNavMarker(){
    let url  = window.location.href;
    let link;
    if (url === "https://prietzeria.xyz/index.html"){
       link = document.querySelector("#homeLink");
    }
    else if (url === "https://prietzeria.xyz/menu.html"){
        link = document.querySelector("#menuLink");
    }
    else if (url === "https://prietzeria.xyz/booking.html"){
        link = document.querySelector("#bookingLink");
    }
    else if (url === "https://prietzeria.xyz/contact.html"){
        link = document.querySelector("#contactLink");
    }
    link.style.borderBottom = "0px";
    link.style.borderTop = "2px solid #d5c7ac"
    link.className = "selectedNavElement"
}

document.getElementById("nav-placeholder").innerHTML = nav;
setNavMarker();
