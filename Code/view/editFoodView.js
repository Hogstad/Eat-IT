// skjermbilde 7, 8!!!!!!!!!!!!!!!!!!!

function editFoodView(index) {
    selectedFood(index);
    let html = "";
    html += `
            <div id="mainViewButtons">
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
                    <button id="mainViewCategory">${model.category[i].type}</button>    
               `;
            };
            html += `
                <button id="addCategory">Legg til</button>
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
        // selectedTable();
};


//Sette inn table for alle greiene i model.category[].retter[].ingredients 
// Table med type på toppen "navn"
// Så pushe inn alle ingr.
// Så legge til en checkbox på siden.

/*      <tr>
<td>Kjøttdeig</td>
<td><input type="checkbox"></td>
</tr>
<tr>
<td>Tacolefse</td>
<td><input type="checkbox"></td>
</tr>
<tr>
<td>Tacokrydder</td>
<td><input type="checkbox"></td>
</tr>
<tr>
<td>NASA material</td>
<td><input type="checkbox"></td>
</tr> */