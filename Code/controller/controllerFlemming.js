//Controller
// function endre bruker
// -bytte fra en bruker til en annen. blir valgt ut ifra en dropdown meny.

// function legg til bruker
// -legge til navnet til brukeren
// - legg til knapp

// function bytte til order
// -bytte over til order view

// function legge til ny kategori
// -legge til ny hovedkategori
// - legg til knapp

// function redigere matrett
// - redigere innhold på en rett
// - oppdatere matretten med nytt innhold

// function slett matrett
// -slette den valgte matretten

// function legge til ny matrett
// -legge til en ny matrett inne på den valgte kategorien.

// function checkbox
// -checkbox til ordre siden. 

function saveNewRetter() {
    let x = {
        name: addRetter,
        ingredients: ["Name:", addIngredients,],
    }
    model.category[model.selectedCategory].retter.push(x)
}

function selectedCategory(num) {
    model.selectedCategory = num;
}

function getDataCategory(inputText) {
    addRetter = inputText;
}
function getDataCategory(inputText) {
    addIngredients = inputText;
}
