function orderViewWaiter(index) {
    selectedTable(index)
    let html = "";
    html += `
            <div class="lengerMeny">
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
                <button class="ordreButton" onclick="mainView()">Home</button>
                <button class="ordreButton" onclick="orderViewWaiter()">Ordre</button>
                <button class="ferdigButton" onclick="completeOrderViewWaitor()">Ferdig Ordre</button>
            </div> 
            `;
            html += `
                <table id="orderViewWaiterCss"style="width: 90%">
            `;
            for (let i = 0; i < model.order[model.selectedWaitor].length; i++) {
                let totalPris = 0;
                html += `
                <tr>
                    <td style="width: 200px;"><b>Bord: ${i + 1}</b></td>
                    <td style="width: 300px;"><b>${model.waitor.names[model.selectedWaitor].name}</b></td>
                    <td style="width: 60px; border: none;"></td>
                </tr>
                `;
                for (let j = 0; j < model.order[model.selectedWaitor][i].length; j++){
                        totalPris += model.order[model.selectedWaitor][i][j].pris;
                    html += `
                    <tr>
                        <td>${model.order[model.selectedWaitor][i][j].måltid}</td>
                        <td>`;
                    for (let k = 0; k < model.order[model.selectedWaitor][i][j].notWanted.length; k++) {
                     html += `  
                      -${model.order[model.selectedWaitor][i][j].notWanted[k]},
                      `;
                    }
                        html += `
                        <b>${model.order[model.selectedWaitor][i][j].kommentar}<b>
                        </td>
                        <td style="width: 2px; border: none;">${model.order[model.selectedWaitor][i][j].finnished ? '<button onclick="dishDelivery('+ i + ',' + j +')">Lever</button>' : ""}</td>
                    </tr>
                    `;
                    
                };
                html += `
                    <tr>
                    <td style="border:none;"></td>
                    <td>Sum: ${totalPris},-</td>
                    </tr>
                    <tr>
                    <td style="height: 20px; border: none;"></td>
                    <td style="height: 20px; border: none;"></td>
                    </tr>
                `;
            };
            html += `
                </table>
            `;
         
        divApp.innerHTML = html;
};
