// skjermbilde 7, 8!!!!!!!!!!!!!!!!!!!

function editFoodView() {
    let html = "";
    html += `
            <div id="mainViewButtons">
                <button>Servitør</button>
                <button>Legg til ny bruker</button>
                <button>Ordre</button>
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
                <select onchange="selectedTable(this.value, true)"> `;
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
                    <tr>
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
                    </tr>
                </table>
            
            </div>
            `;
            
        divApp.innerHTML = html;
        selectedTable();
};


//Sette inn table for alle greiene i model.category[].retter[].ingredients 
// Table med type på toppen "navn"
// Så pushe inn alle ingr.
// Så legge til en checkbox på siden.