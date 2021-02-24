function completeOrderViewCook() {
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
                <button class="ordreButton" onclick="mainView()">Home</button>
                <button class="ordreButton" onclick="orderViewWaiter()">Ordre</button>
            </div> 
            `;
            html += "<div class='scrollBar'><table id='completeOrdersCook' style='width: 90%'>";
            for (let i = 0; i < model.waitor.names.length; i++) {
                for (let j = 0; j < model.tables.names.length; j++) {
                    html += viewTableHelp('Bord '+(j+1), i);
                    html += viewInfoHelp('Bord '+(j+1), i);
                }
            }
        html += `
        </table>
        </div>
        `;
    divApp.innerHTML = html
};     
    function viewTableHelp(bord, index) {
        let html = `
            <tr style="height: 20px;"></tr>
            <tr>
                <td style="width: 15%;">${model.waitor.names[index].name}</td>
                <td style="width: 200px;">${bord}</td>
                <td>Pris:</td>
            </tr>
        `;
        return html;
    };

    function viewInfoHelp(bord, index) {
        let html = '';
        for (let i = 0; i < model.completeOrder.length; i++){
            if (model.completeOrder[i].table == bord &&
                model.completeOrder[i].waiter == model.waitor.names[index].name) {
                html += `
                    <tr>
                        <td>${model.completeOrder[i].måltid}</td>
                        <td>${model.completeOrder[i].notWanted} ${model.completeOrder[i].kommentar}</td>
                        <td style="width: 8%;">${model.completeOrder[i].pris},-</td>
                    </tr>
                    `;
            };
        };
        return html;
    };