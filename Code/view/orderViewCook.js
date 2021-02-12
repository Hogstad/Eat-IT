// skjermbilde 7, 8!!!!!!!!!!!!!!!!!!!

function orderViewCook(index) {
    selectedTable(index)
    let html = "";
    html += `
            <div id="mainViewButtons">
            <select onchange="selectedWaitor(this.value)"> `;
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
                <button onclick="mainView()">Home</button>
                <button onclick="orderViewWaiter()">Ordre</button>
            </div> 
            `;
            html += `
                <table id="orderViewWaiterCss"style="width: 50%">
            `;
            for (let i = 0; i < model.order.length; i++) {
                html += `
                    <td><b>Bord: ${i + 1}</b></td>
                    <td><b>${model.waitor.names[i].name}</b></td>
                `;
                for (let j = 0; j < model.order[model.selectedWaitor][i].length; j++){
                    html += `
                    <tr>
                        <td>${model.order[model.selectedWaitor][i][j].måltid}</td>
                        <td>`;
                    for (let k = 0; k < model.order[model.selectedWaitor][i][j].notWanted.length; k++) {
                     html += `  
                      ${model.order[model.selectedWaitor][i][j].notWanted[k]}
                      `;
                    }
                        html += `
                        ${model.order[model.selectedWaitor][i][j].kommentar}
                        </td>
                        <td><input type="checkbox"></td>
                    </tr>
                    `;
                    
                };
                html += `
                    <tr>
                    <td style="border:none;"></td>
                    </tr>
                `;
            };
            html += `
                </table>
            `;
         
        divApp.innerHTML = html;
};

//Sette inn table for alle greiene i model.category[].retter[].ingredients 
// Table med type på toppen "navn"
// Så pushe inn alle ingr.
// Så legge til en checkbox på siden.