/*
    Henter bestilling fra menyskjema og kan presentere gjeldende ordre i en handlekurv. Lager også kvittering når bruker bestiller.
*/

// Dette er en global variabel som til enhver tid har alle retter i bestillingen.
var dishes = [];

function makeOrderArray(dishes) {
    Array.prototype.contains = function(v) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === v) return true;
        }
        return false;
    };

    Array.prototype.unique = function() {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr;
    }
    let unique = dishes.unique();
    // Tell antall retter av hvert slag
    for (order of unique) {
        count = 0;
        for (dish of dishes) {
            if (dish === order) {
                count++;
            }
        }
        order.count = count;
    }
    return unique;
}

function renderReceipt(dishes, targetElement) {
    let receipt = makeOrderArray(dishes);
    var parent = document.querySelector(targetElement);
    // Clear the ul first
    parent.innerHTML = "";
    for (order of receipt) {
        var element = document.createElement("li");
        let ammount = order.count;
        let name = order.name;
        let price = ammount * order.price;
        element.append(ammount + "x " + name + " - " + price + "kr");
        parent.appendChild(element);
    }
}

//Henter totalprisen basert på dishes[]
function setTotalPrice() {
    let sum = 0;
    for (d of dishes) {
        sum += d.price;
    }
    document.querySelector("#totalPrice").innerHTML = sum;
}

function setNumDishes() {
    let num = dishes.length;
    document.querySelector("#orderedDishes").innerHTML = num;
}

// Denne funksjonen må kalles hver gang vi rendrer rettene
// Oppdater handlekurv i eventlistner funksjonen.
function queryInput() {
    document.querySelectorAll('.orderInput').forEach(item => {
        item.addEventListener('change', event => {
            let val = event.target.value;
            let id = event.target.id.replace(/^\D+/g, '');
            updateDishes(id, val);
            setTotalPrice();
            setNumDishes();
        })
    })
}

function updateDishes(id, ammount) {
    let pop_i = []
        // Finner indecies til retter i dishes med samme id
    for (i = 0; i < dishes.length; i++) {
        if (dishes[i].id == id) {
            pop_i.push(i);
        }
    }
    // Fjerner eksisterende retter fra listen
    for (i = pop_i.length - 1; i >= 0; i--) {
        dishes.splice(pop_i[i], 1);
    }
    // Legger til riktig antall retter i listen
    for (i = 0; i < ammount; i++) {
        dishes.push(getFoodById(id));
    }
    console.log(dishes);
}

function getFoodById(id) {
    for (food of antipasti) {
        if (food.id == id) {
            return food
        }
    }
    for (food of paste) {
        if (food.id == id) {
            return food
        }
    }
    for (food of dolci) {
        if (food.id == id) {
            return food
        }
    }
    for (food of pizze) {
        if (food.id == id) {
            return food
        }
    }
}