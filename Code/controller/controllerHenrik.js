// funksjoner for addUserView for å kunne legge til nye servitører.
function getData(inputText) {
    addWaitor = inputText;
}

function saveNewWaitor() {
    let x = {
        name: addWaitor, isSelected: false,
    }
    model.waitor.names.push(x);
    inputText = "";
    addUserView();
}

