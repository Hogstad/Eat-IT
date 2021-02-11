// skjermbilde 11!!!!!!!!!!!!!!!!

function orderViewWaiter(index) {
    // selectedWaitor(index)
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
            for (let i = 0; i < model.order[model.selectedWaitor].length; i++) {
                let totalPris = 0;
                html += `
                    <td><b>Bord: ${i + 1}</b></td>
                    <td><b>${model.waitor.names[model.selectedWaitor].name}</b></td>
                `;
                for (let j = 0; j < model.order[model.selectedWaitor][i].length; j++){
                    console.log(model.order[model.selectedWaitor][i][j]);
                    // for (let p = 0; p < model.order[model.selectedWaitor][i][j]; p++) {
                        totalPris += model.order[model.selectedWaitor][i][j].pris;
                    // }
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
                    <td>${totalPris}</td>
                    </tr>
                `;
            };
            html += `
                </table>
            `;
         
        divApp.innerHTML = html;
};
// html += `
//                 <div>
                
//                     <table>
//                         <th>Bord 1</th>
//                         <th>Henrik</th>
//                         <tr>
//                         <td>Taco</td>
//                         <td>Ingr</td>
//                         <td><input type="checkbox"></td>
//                         </tr>
//                     </table>
//                 </div>
            
//             `;

// `
//                 <div>
                
//                     <table>
//                         <th>${model.Order[model.selectedWaitor][model.selectedTable]}</th>
//                         <th>${model.Order[model.selectedWaitor]}</th>
//                         <tr>
//                         <td>${model.Order[model.selectedWaitor][model.selectedTable].måltid}</td>
//                         <td>${model.Order[model.selectedWaitor][model.selectedTable].notwanted}, ${model.Order[model.selectedWaitor][model.selectedTable].kommentar}</td>
//                         <td><input type="checkbox"></td>
//                         </tr>
//                     </table>
//                 </div>
            
//             `;