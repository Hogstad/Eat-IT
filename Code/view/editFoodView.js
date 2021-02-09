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
                    `;
                    let retter = model.category[model.selectedCategory].retter[selectedFood];
                    for(let j = 0; j < retter.length; j++) {
                        html +=`
                    <tr>
                        <td>${j + 1}:</td>
                        <td>${retter[j].ingredients}</td>
                            `;
                            if (j === model.checkedBox) {
                                html += `
                                <td><input checked type="checkbox" onchange="boxIsChecked(${j})"></td>`;
                            }
                            else {
                                html += `
                                <td> <input type="checkbox" onchange="boxIsChecked(${j})"> </td>
                                `;
                            }
                            html += `
                    </tr>
                    `; 
                    html +=`
            }
            `;
            html +=`
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