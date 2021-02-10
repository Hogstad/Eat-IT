// skjermbilde 11!!!!!!!!!!!!!!!!

function orderViewWaiter(index) {
    selectedWaitor(index)
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
            for (let j = 0; j < model.Order[model.selectedWaitor][model.selectedTable]; j++) {
                html += `
                <div>
                
                    <table>
                        <th>Bord 1</th>
                        <th>Henrik</th>
                        <tr>
                        <td>Taco</td>
                        <td>Ingr</td>
                        <td><input type="checkbox"></td>
                        </tr>
                    </table>
                </div>
            
            `;
            };
            
         
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