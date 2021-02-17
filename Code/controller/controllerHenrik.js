//Function for å lagre ny servitør i modellen.
function saveNewWaitor() {
    let x = {
        name: addWaitor,
    }
    model.waitor.names.push(x);
    inputText = "";
    let y = [];
    for (let i = 0; i < model.tables.names.length; i++) {
        y.push([]);
    }
    model.order.push(y);
    mainView();
}
//Function for å lagre ny Category i modellen.
function saveNewCategory() {
    let x = {
        type: addCategory,
        retter: [],
    }
    model.category.push(x);
    mainView();
}
//Function for å lagre ny retter innen for category i mordellen.
function saveNewRetter() {
    let x = {
        navn: model.addRetter,
        pris: model.addPris + ",-",
        ingredients: model.addIngredients,
    }
    model.category[model.selectedCategory].retter.push(x);
    printCategory(model.selectedCategory);
    mainView();
}
//Inputtext functions.
function getDataCategory(inputText) {
    addCategory = inputText;
}

function getDataCategoryTwo(inputTextCategory) {
    model.addRetter = inputTextCategory;
}

function getDataCategoryThree(inputTextCategory) {
    let temporaryAddIngredients = inputTextCategory.split(", ");
    let liste = [];
    for (let i = 0; i < temporaryAddIngredients.length; i++) {
        let x = {name: temporaryAddIngredients[i]};
        liste.push(x);
    }
    model.addIngredients = liste;
}

function getDataCategoryPrice(inputTextCategory) {
    model.addPris = inputTextCategory;
}
//Hjelpefunction for å velge servitør/category/table.
function selectedCategory(num) {
    model.selectedCategory = num;
}

function selectedWaitor(num) {
    if (num == "Kokk") {
        orderViewCook();
    }
    else {
        model.selectedWaitor = num;
    }
}
function selectedTable(num) {
    model.selectedTable = num;
}
function selectedFood(num) {
    model.selectedFood = num;
}
function getDataWaitor(inputText) {
    addWaitor = inputText;
}
function getDataKommentar(text) {
    model.kommentar = text;
    return text;
}
// funksjoner for bestilling!
function bestilling() {
        let x = {
            måltid: model.category[model.selectedCategory].retter[model.selectedFood].navn,
            pris: model.category[model.selectedCategory].retter[model.selectedFood].pris,
            notWanted: model.notWanted,
            kommentar: model.kommentar,
            finnished: false,
        }
        model.order[model.selectedWaitor][model.selectedTable].push(x);
        orderViewWaiter();
}
function notWantedList(checky) {
    if (checky.checked) {
        model.notWanted.push(checky.value);
    }
    else {
       let index = model.notWanted.indexOf(checky.value);
       model.notWanted.splice(index, 1);
        
    } 
};
// funksjoner for rediger knappen!
function redigerRett() {
    for (let i = 0; i < model.redigerListe.length; i++) {
        model.category[model.selectedCategory].retter[model.selectedFood].ingredients.splice(model.redigerListe[0], 1);
    }
    model.redigerListe = [];
    redigerFoodView(model.selectedFood);
}

function redigerRettHjelp(checky) {
    if (checky.checked) {
        model.redigerListe.push(checky.value);
    }
    else {
       let index = model.redigerListe.indexOf(checky.value);
       model.redigerListe.splice(index, 1);
    } 
};
// funksjon for å legge til i redigerFoodView.
function redigerRettLeggTil() {
    let x = {name: model.leggTilRediger};
    model.category[model.selectedCategory].retter[model.selectedFood].ingredients.push(x);
    redigerFoodView(model.selectedFood);
}

function getDataLeggTilRediger(inputText) {
    model.leggTilRediger = inputText;
}
// Funksjon som skal la kokken velge at maten er klar.
function cookFinnishedDish(servitør, bord, måltid) {
    model.order[servitør][bord][måltid].finnished = true;
    orderViewCook();
}
// Funksjon som skal la servitøren levere retten.
function dishDelivery(i, j) {
    model.completeOrder.push(model.order[model.selectedWaitor][i][j]);
    model.order[model.selectedWaitor][i].splice(j, 1);
    orderViewWaiter();
}