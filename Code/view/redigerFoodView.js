function redigerFoodView(index) {
    selectedFood(index);
    let html = "";
    html += `
            <div id="mainViewButtons">
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
            <div id="editFoodViewCss">
            <button id="visFremNavn"><b>${model.category[model.selectedCategory].retter[model.selectedFood].navn}</b></button>
            `;
            html += `
                <table id="editFoodTable" style="width: 30%">
                    <tr>
                        <th>Ingredienser</th>
                        <th>Fjern</th>
                    </tr>
                    `;
                    let ingr = model.category[model.selectedCategory].retter[model.selectedFood].ingredients;
                    for (let liste = 0; liste < ingr.length; liste++) {
                        html += `
                            <tr>
                                <td>${ingr[liste].name}</td>
                                <td><input type="checkbox" value="${liste}" oninput="redigerRettHjelp(this)"></td>
                            </tr>
                        `;
                    }

                    html += `
                </table>
                    <input id="redigerInput" class="tabellCss" type="text" placeholder="Legg til ingrediens" oninput="getDataLeggTilRediger(this.value)"></input>
                <div class="redigerKnapper">
                    <button onclick="slettRett()">Slett ${model.category[model.selectedCategory].retter[model.selectedFood].navn}</button>
                    <button id="leggTilRediger" disabled onclick="redigerRettLeggTil()">Legg til</button>
                    <button id="sletteValgtButton" disabled onclick="redigerRett()">Slett valgt</button>
                </div>
            </div>  
            `;
            
        divApp.innerHTML = html;
};
