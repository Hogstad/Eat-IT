
mainView();
function mainView() {
    let html = "";
    html += `
            <div id="mainViewButtons">
            
            <select onchange="selectedWaitor(this.value)"> `;
            html += `
            <option onclick="orderViewCook()">Kokk</option>
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
            </select>
                <button onclick="addUserView()">Legg til ny bruker</button>
                <button onclick="orderViewWaiter()">Ordre</button>
            </div> 
                `;
                html += `
                <div id="oneDiv">
                `;
            for(let i = 0; i < model.category.length; i++) {
                html += `
                    <button onclick="printCategory(${i})" id="mainViewCategory">${model.category[i].type}</button>    
               `;
            };
            html += `
                <button id="addCategory" onclick="addCategoryView()">Legg til</button>
            </div>
            `;
            html += `
            <div id="mainViewShowDishes">${model.showDishes}</div>
            `;
        divApp.innerHTML = html;
};

function printCategory(index) {             
    let html = "";
    html += `
    <button onclick="addFoodView()" id="addFoodViewButton">Legg til</button>
    `;
    for (let i = 0; i < model.category[index].retter.length; i++) {
        html += `
            <div class="dishDiv">
                <h2>${model.category[index].retter[i].navn} ${model.category[index].retter[i].pris}</h2><h4>
        `;
        for (let j = 0; j < model.category[index].retter[i].ingredients.length; j++) {
            html += `
                ${model.category[index].retter[i].ingredients[j].name},  
            `;
        }
        html += `
            </h4>
                <button class="coloredButtons" onclick="redigerFoodView(${i})">Rediger</button>
                <button class="coloredButtons" onclick="editFoodView(${i})">Bestill</button>
            </div>
        `;
    }
    html += `
        
    `;
    model.showDishes = html;
    selectedCategory(index);
    selectedWaitor(index);
    mainView();
};
