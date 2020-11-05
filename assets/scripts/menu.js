/*
    JavaScript for å rendre rettene til html. Avhenger av menuSort. Brukes på menu.html
*/

const supportsTemplate = function() {
    return 'content' in document.createElement('template');
}

function renderItems() {
    antipasti.forEach((item) => { render(item, '#menu_antipasti') });
    paste.forEach((item) => { render(item, '#menu_paste') });
    dolci.forEach((item) => { render(item, '#menu_dolci') });
    pizze.forEach((item) => { render(item, '#menu_pizze') });
    // Adds event listner to inputs
    queryInput();
}

function removeItems() {
    document.querySelectorAll('.dish_container').forEach((container) => { container.remove() });
}

function render(item, id) {
    // Removes existing elements
    if (supportsTemplate()) {
        console.log('Browser supports templates');
        let t = document.querySelector('#dish_template');
        let content = t.content;
        /*
        console.log(item.name);
        console.log(item.desc);
        console.log(item.price);
        */
        content.querySelector('#item_name').innerHTML = item.name;
        content.querySelector('#item_description').innerHTML = item.desc;
        content.querySelector('#price').innerHTML = item.price + ",-";
        content.querySelector('img').src = item.img;
        content.querySelector('input').id = "item_" + item.id;
        content.querySelector('label').setAttribute("for", "item_" + item.id);
        content.querySelector('img').setAttribute("alt", "Bilde av " + item.name);
        const clone = document.importNode(content, true);
        document.querySelector(id).appendChild(clone);
    } else {
        console.log('Browser does not support templates');
    }
}