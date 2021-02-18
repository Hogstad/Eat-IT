function redigerFoodView(index) {
    selectedFood(index);
    let html = "";
    html += `
            <div id="mainViewButtons">
            `;
            html += createWaitorOptions();
            html +=`
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
                    <br>
                    <br>
                    <input style="width: 235px;" type="text" placeholder="Rediger" oninput="getDataLeggTilRediger(this.value)"></input>
                    <button style="position: relative; top: 25px; left: -129px;" onclick="slettRett()">Slett ${model.category[model.selectedCategory].retter[model.selectedFood].navn}</button>
                    <button style="position: relative; top: 25px; left: -129px;" onclick="redigerRettLeggTil()">Legg til</button>
                    <button style="position: relative; top: 25px; left: -129px;" onclick="redigerRett()">Rediger</button>
            </div>  
            `;
            
        divApp.innerHTML = html;
};
