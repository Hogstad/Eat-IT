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
// Funksjon for disable knapp på legg til ny servitør!
function saveNewWaitorButton() {
    let name = document.getElementById('fname')
    let button = document.getElementById('saveNewWaitorButton')
        if (name.value === "") {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
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
// Funksjon som skal disable legg til knapp!
function saveNewCategoryButton () {
    let name = document.getElementById('kategoriNameX')
    let button = document.getElementById('addCategoryButton')
        if (name.value === "") {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
}
//Function for å lagre ny retter innen for category i mordellen.
function saveNewRetter() {
    let x = {
        navn: model.addRetter,
        pris: model.addPris,
        ingredients: model.addIngredients,
    }
    model.category[model.selectedCategory].retter.push(x);
    printCategory(model.selectedCategory);
    mainView();
}
function saveRetterButton() {
    let name = document.getElementById('kategoriName')
    let ingr = document.getElementById('kategoriNameTwo')
    let price = document.getElementById('kategoriPrice')
    let button = document.getElementById('saveNewRetterButton')
    if (name.value === "" || ingr.value === "" || price.value === "") {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }
}
//Inputtext functions.
function getDataCategory(inputText) {
    addCategory = inputText;
    saveNewCategoryButton();
}

function getDataCategoryTwo(inputTextCategory) {
    model.addRetter = inputTextCategory;
    saveRetterButton();
}

function getDataCategoryThree(inputTextCategory) {
    let temporaryAddIngredients = inputTextCategory.split(", ");
    let liste = [];
    for (let i = 0; i < temporaryAddIngredients.length; i++) {
        let x = {name: temporaryAddIngredients[i]};
        liste.push(x);
    }
    model.addIngredients = liste;
    saveRetterButton();
}

function getDataCategoryPrice(inputTextCategory) {
    model.addPris = parseInt(inputTextCategory);
    saveRetterButton();
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
    saveNewWaitorButton();
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
        orderViewWaiter(model.selectedTable);
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
// funksjoner for slette valgt knappen!
function redigerRett() {
    for (let i = 0; i < model.redigerListe.length; i++) {
        model.category[model.selectedCategory].retter[model.selectedFood].ingredients.splice(model.redigerListe[0], 1);
    }
    model.redigerListe = [];
    redigerFoodView(model.selectedFood);
}
// Funksjon for å gjøre slette valgt knappen disabled med mer!
function redigerRettHjelp(checky) {
    if (checky.checked) {
        model.redigerListe.push(checky.value);
    }
    else {
       let index = model.redigerListe.indexOf(checky.value);
       model.redigerListe.splice(index, 1);
    } 
    if (model.redigerListe.length > 0) {
        console.log(document.getElementById('sletteValgtButton').disabled = false);
    }
    else {
        document.getElementById('sletteValgtButton').disabled = true;
    }
    
};
// funksjon for å legge til i redigerFoodView.
function redigerRettLeggTil() {
    let x = {name: model.leggTilRediger};
    model.category[model.selectedCategory].retter[model.selectedFood].ingredients.push(x);
    redigerFoodView(model.selectedFood);
}
// Funksjon for å legg til knappen i redigerFoodView.
function redigerRettLeggTilButton() {
    let inputs = document.getElementById('redigerInput');
    let button = document.getElementById('leggTilRediger');
    if (inputs.value === '') {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }
}

function getDataLeggTilRediger(inputText) {
    model.leggTilRediger = inputText;
    redigerRettLeggTilButton();
}
// Funksjon som skal la kokken velge at maten er klar.
function cookFinnishedDish(servitør, bord, måltid) {
    model.order[servitør][bord][måltid].finnished = true;
    orderViewCook();
}
// Funksjon som skal la servitøren levere retten.
function dishDelivery(i, j) {
    model.completeOrder.push(model.order[model.selectedWaitor][i][j]);
    model.completeOrder[model.completeOrder.length -1].waiter = model.waitor.names[model.selectedWaitor].name;
    model.completeOrder[model.completeOrder.length -1].table = model.tables.names[i].name;
    delete model.completeOrder[model.completeOrder.length -1].finnished;
    model.order[model.selectedWaitor][i].splice(j, 1);
    orderViewWaiter();
}
// Funksjon til slette rett knapp!
function slettRett() {
    model.category[model.selectedCategory].retter.splice(model.selectedFood, 1);
    printCategory(model.selectedCategory);
}

function newTable() {
    let x = {
        name: newTableName(),
    };
    model.tables.names.push(x);
    addTableView()
}

function newTableName() {
    for (let i = 1; i <= model.tables.names.length +1; i++) {
        if (newTableNameHelper(i)) {
            return 'Bord '+i;
        }
    }
}

function newTableNameHelper(i) {
    for (let j = 0; j < model.tables.names.length; j++) {
        let num = model.tables.names[j].name.substring(4)
        if (num == i) {
            return false;
        }
    }
    return true;
}

function GetSelectedValue(select) {
    if (select.value == 1) {
        addUserView()
    }
    if (select.value == 2) {
        addTableView()
    }
}
// Funksjon som skal slette kategorier!
function slettKategori(index) {
    model.category.splice(index, 1);
    model.showDishes = "";
    mainView();
}

// local Storage funksjoner

function saveToLocalStorage() {
    let waitorZip = JSON.stringify(model.waitor);
    let tablesZip = JSON.stringify(model.tables);
    let categoryZip = JSON.stringify(model.category);
    let orderZip = JSON.stringify(model.order);
    let completeOrderZip = JSON.stringify(model.completeOrder);

    localStorage.setItem("waitor", waitorZip);
    localStorage.setItem("tables", tablesZip);
    localStorage.setItem("category", categoryZip);
    localStorage.setItem("order", orderZip);
    localStorage.setItem("completeOrder", completeOrderZip);
}
function getFromLocalStorage() {
    if (localStorage.getItem("waitor") !== null) {
        waitorUnzip = JSON.parse(localStorage.getItem("waitor"));
        tablesUnzip = JSON.parse(localStorage.getItem("tables"));
        categoryUnzip = JSON.parse(localStorage.getItem("category"));
        orderUnzip = JSON.parse(localStorage.getItem("order"));
        completeOrderUnzip = JSON.parse(localStorage.getItem("completeOrder"));

        model.waitor = waitorUnzip;
        model.tables = tablesUnzip;
        model.category = categoryUnzip;
        model.order = orderUnzip;
        model.completeOrder = completeOrderUnzip;
    }
}

// window.onbeforeunload = function() {
//     saveToLocalStorage();
// }
// window.onload = function() {
//     getFromLocalStorage();
// }