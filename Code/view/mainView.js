mainView();
function mainView() {
    let html = "";
    html += `
            <div class="red1" id="mainViewButtons">
            `;
            html += createWaitorOptions();
            html +=`
            <select id="select" onchange=GetSelectedValue(this) name="Legg til">
                <option>Legg til</option>
                <option value="1">Legg til ny Bruker</option>
                <option value="2">Legg til nytt Bord</option>
            </select>
                <button class="ordreButton" onclick="orderViewWaiter()">Ordre</button>
            </div> 
                `;
                html += `
                <div id="oneDiv">
                `;
            for(let j = 0; j < model.category.length; j++) {
                html += `
                    <button onclick="printCategory(${j})" id="mainViewCategory">${model.category[j].type}</button>    
               `;
            };
            html += `
                <button id="addCategory" onclick="addCategoryView()">Legg til</button>
            </div>
            `;
            html += `
            <div class="red1" id="mainViewShowDishes">${model.showDishes}</div>
            `;
        divApp.innerHTML = html;
};

function printCategory(index) {             
    let html = "";
    html += `
    <button id="addFoodViewButton" onclick="slettKategori(${index})">Slett ${model.category[index].type}</button>
    <button onclick="addFoodView()" id="addFoodViewButton">Legg til</button>
    `;
    for (let i = 0; i < model.category[index].retter.length; i++) {
        html += `
            <div class="dishDiv">
                <h2 class="header">${model.category[index].retter[i].navn}</h2>
                <h4 class="innhold">
        `;    
        for (let j = 0; j < model.category[index].retter[i].ingredients.length; j++) {
            html += `
                ${model.category[index].retter[i].ingredients[j].name},  
            `;
        }
        html += `
            </h4>
            <div class="knapper">
                <button class="coloredButtons" onclick="redigerFoodView(${i})">Rediger</button>
                <button class="coloredButtons" onclick="editFoodView(${i})">Bestill</button>
            </div>
                <div class="prisCss">Pris: ${model.category[index].retter[i].pris},-</div>
            </div>
        `;
    }
    html += `
        
    `;
    model.showDishes = html;
    selectedCategory(index);
    mainView();
};

function createWaitorOptions() {
    let html = ""; 
    html +=`
    <select onchange="selectedWaitor(this.value)"> `;
            html += `
            <option value="Kokk">Kokk</option>
            `;
            for(let i = 0; i <model.waitor.names.length; i++) {
                if (i == model.selectedWaitor) {
                    html += `
                    <option selected value="${i}">${model.waitor.names[i].name}</option>
                    `;
                }
                else {
                    html += `
                    <option value="${i}">${model.waitor.names[i].name}</option>
                    `;
                }
            }
            html += `
            </select>`;
    return html
} 