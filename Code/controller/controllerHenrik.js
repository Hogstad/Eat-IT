// funksjoner for addUserView for å kunne legge til nye servitører.
function getDataWaitor(inputText) {
    addWaitor = inputText;
}

function saveNewWaitor() {
    let x = {
        name: addWaitor,
    }
    model.waitor.names.push(x);
    inputText = "";
    mainView();
}

function getDataCategory(inputText) {
    addCategory = inputText;
}

function saveNewCategory() {
    let x = {
        type: addCategory,
        retter: [],
    }
    model.category.push(x);
    mainView();
}

// funksjoner for å legge til noe i nye kategorier.

function saveNewRetter() {
    let x = {
        navn: model.addRetter,
        pris: model.addPris,
        ingredients: model.addIngredients,
            
        
    }
    model.category[model.selectedCategory].retter.push(x);
    mainView();
}

function getDataCategoryTwo(inputTextCategory) {
    model.addRetter = inputTextCategory;
}

function getDataCategoryPrice(inputTextCategory) {
    model.addPris = inputTextCategory;
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

function selectedCategory(num) {
    model.selectedCategory = num;
}

function selectedWaitor(num) {
    model.selectedWaitor = num;
}
