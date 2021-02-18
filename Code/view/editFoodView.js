function editFoodView(index) {
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
                <select id="bordCss" onchange="selectedTable(this.value, true)"> `;
                    for(let i = 0; i <model.tables.names.length; i++) {
                        if (i == model.selectedTable) {
            html += `
                <option selected value="${i}">${model.tables.names[i].name}</option>
                    `;
            }
                        else {
            html += `
                <option value="${i}">${model.tables.names[i].name}</option>
                    `;
            }
            }
            html += `
            </select>
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
                                <td><input value="${ingr[liste].name}" type="checkbox" onchange="notWantedList(this)"></td>
                            </tr>
                        `;
                    }

                    html += `
                </table>
                    <br>
                    <br>
                    <input style="width: 235px;" oninput="getDataKommentar(this.value)" type="text" placeholder="Kommentarer"></input>
                    <button style="position: relative; top: 25px; left: -72px;" onclick="bestilling()">Send inn</button>
            </div>  
            `;
            
        divApp.innerHTML = html;
};