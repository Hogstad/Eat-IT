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

