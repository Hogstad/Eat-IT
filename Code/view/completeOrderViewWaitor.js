function completeOrderViewWaiter(index) {
    // selectedWaitor(index)
    selectedTable(index)
    let html = "";
    html += `
            <div id="mainViewButtons">
            <select onchange="selectedWaitor(this.value); orderViewWaiter();"> `;
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
                <button onclick="mainView()">Home</button>
                <button onclick="orderViewWaiter()">Ordre</button>
            </div> 
            `;
            html += `
                <table id="orderViewWaiterCss"style="width: 50%">
            `;
            for (let i = 0; i < model.completeOrder[model.selectedWaitor].length; i++) {
                let totalPris = 0;
                html += `
                    <td><b>Bord: ${i + 1}</b></td>
                    <td><b>${model.waitor.names[model.selectedWaitor].name}</b></td>
                `;
                for (let j = 0; j < model.completeOrder[model.selectedWaitor][i].length; j++){
                        totalPris += model.completeOrder[model.selectedWaitor][i][j].pris;
                    html += `
                    <tr>
                        <td>${model.completeOrder[model.selectedWaitor][i][j].måltid}</td>
                        <td>`;
                    for (let k = 0; k < model.completeOrder[model.selectedWaitor][i][j].notWanted.length; k++) {
                     html += `  
                      -${model.completeOrder[model.selectedWaitor][i][j].notWanted[k]},
                      `;
                    }
                        html += `
                        <b>${model.completeOrder[model.selectedWaitor][i][j].kommentar}<b>
                        </td>
                        <td><input type="checkbox"></td>
                    </tr>
                    `;
                    
                };
                html += `
                    <tr>
                    <td style="border:none;"></td>
                    <td>Sum: ${totalPris},-</td>
                    </tr>
                `;
            };
            html += `
                </table>
            `;
         
        divApp.innerHTML = html;
};