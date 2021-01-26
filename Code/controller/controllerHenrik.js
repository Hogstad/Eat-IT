// denne funksjonen skal gjøre det mulig å printe ut navn og
// ingredients når man trykker på en av kategori knappene.

function printCategory(index) {
    let html = "";
    for (let i = 0; i < model.category[index].retter.length; i++) {
        html += `
            <div class="dishDiv">
                <h2>${model.category[index].retter[i].navn}</h2><h4>
        `;
        for (let j = 0; j < model.category[index].retter[i].ingredients.length; j++) {
            html += `
                ${model.category[index].retter[i].ingredients[j].name},  
            `;
        }
        html += `
            </h4>
                <button class="coloredButtons">Rediger</button>
                <button class="coloredButtons">Legg til ny</button>
            </div>
        `;
    }
    html += `
        
    `;
    model.showDishes = html;
    mainView();
}
        