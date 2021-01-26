// denne funksjonen skal gjøre det mulig å printe ut navn og
// ingredients når man trykker på en av kategori knappene.

function printCategory(index) {
    let html = "";
    for (let i = 0; i < model.category[index].retter.length; i++) {
        html += `
            <h2>${model.category[index].retter[i].navn}</h2>
        `;
        for (let j = 0; j < model.category[index].retter[i].ingredients.length; j++) {
            html += `
                <h4>${model.category[index].retter[i].ingredients[j].name}</h4>
            `;
        }
    }
    html += `
        <button>Rediger</button>
    `;
    model.showDishes = html;
    mainView();
}
        