
function getRenderMode(){
  return document.querySelector('#menuFilter').value;
}

function sortAlphapetically(menu){
  let menuClone = Array.from(menu);
  menuClone.sort((a,b)=> {
    if(a.name > b.name){
      return 1;
    }
    else if(a.name < b.name){
      return -1;
    }
    return 0;
  }
  );
  console.log(menuClone);
  return menuClone;
}

function sortByPriceAscending(menu){
  let menuClone = Array.from(menu);
  menuClone.sort((a, b) => a.price - b.price);// For ascending sort
  console.log(menuClone);
  return menuClone;
}

function sortByPriceDescending(menu){
  let menuClone = Array.from(menu);
  menuClone.sort((a, b) => b.price- a.price);// For ascending sort
  console.log(menuClone);
  return menuClone;
}

function reRender(){
  renderMode = getRenderMode();
  if(renderMode == null){
    return;
  }
  removeItems();
  if(renderMode == 0){
    antipasti.forEach((item) => {render(item,'#menu_antipasti')});
    paste.forEach((item) => {render(item,'#menu_paste')});
    dolci.forEach((item) => {render(item,'#menu_dolci')});
    pizze.forEach((item) => {render(item,'#menu_pizze')});
    console.log("Rerendering items: default");
  }
  else if (renderMode == 1){
    sortAlphapetically(antipasti).forEach((item) => {render(item,'#menu_antipasti')})
    sortAlphapetically(paste).forEach((item) => {render(item,'#menu_paste')});
    sortAlphapetically(dolci).forEach((item) => {render(item,'#menu_dolci')});
    sortAlphapetically(pizze).forEach((item) => {render(item,'#menu_pizze')});
    console.log("Rerendering items: alphabetically");
  }
  else if (renderMode == 2){
    sortByPriceAscending(antipasti).forEach((item) => {render(item,'#menu_antipasti')})
    sortByPriceAscending(paste).forEach((item) => {render(item,'#menu_paste')});
    sortByPriceAscending(dolci).forEach((item) => {render(item,'#menu_dolci')});
    sortByPriceAscending(pizze).forEach((item) => {render(item,'#menu_pizze')});
    console.log("Rerendering items: by price (ascending)");
  }
  else if (renderMode == 3){
    sortByPriceDescending(antipasti).forEach((item) => {render(item,'#menu_antipasti')})
    sortByPriceDescending(paste).forEach((item) => {render(item,'#menu_paste')});
    sortByPriceDescending(dolci).forEach((item) => {render(item,'#menu_dolci')});
    sortByPriceDescending(pizze).forEach((item) => {render(item,'#menu_pizze')});
    console.log("Rerendering items: by price (descending)");
  }
  else{
    console.log("ERROR!! renderMode out of bounds!");
  }
}