//Function for å lagre ny servitør i modellen.
function saveNewWaitor() {
    let x = {
        name: addWaitor,
    }
    model.waitor.names.push(x);
    inputText = "";
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
        pris: model.addPris,
        ingredients: model.addIngredients,
    }
    model.category[model.selectedCategory].retter.push(x);
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

//Hjelpefunction for å velge servitør/category.
function selectedCategory(num) {
    model.selectedCategory = num;
}

function selectedWaitor(num) {
    model.selectedWaitor = num;
}

function getDataWaitor(inputText) {
    addWaitor = inputText;
}