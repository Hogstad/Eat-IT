function completeOrderViewWaitor() {
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
                <button onclick="mainView()">Home</button>
                <button onclick="orderViewWaiter()">Ordre</button>
            </div> 
            `;
            html += '<table>';
                for (let j = 0; j < model.tables.names.length; j++) {
                    html += viewTableHelp('Bord '+(j+1), model.selectedWaitor);
                    html += viewInfoHelp('Bord '+(j+1), model.selectedWaitor);
                }
        html += `
        </table>
        `;
    divApp.innerHTML = html
};  