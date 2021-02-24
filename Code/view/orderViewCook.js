function orderViewCook() {
    let html = "";
    html += `
            <div class="lengerMeny">
            <select onchange="selectedWaitor(this.value)"> `;
            html += `
            <option selected value="Kokk">Kokk</option>
            `;
            for(let i = 0; i <model.waitor.names.length; i++) {
                if (i == model.selectedWaitor) {
                    html += `
                    <option value="${i}">${model.waitor.names[i].name}</option>
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
                <button class="ferdigButton" onclick="completeOrderViewCook()">Ferdig ordre</button>
            </div> 
            `;
            html += `
                <table id="orderViewWaiterCss"style="width: 90%">
                `;
            for (let servitør = 0; servitør < model.order.length; servitør++) {
                html += `
                        <td><b>${model.waitor.names[servitør].name}</b></td><br>
                `;
                for (let bord = 0; bord < model.order[servitør].length; bord++) {
                    html+= `     
                    <tr>
                        <td><b>Bord ${bord + 1}</b></td>
                    `;
                    for (let måltid = 0; måltid < model.order[servitør][bord].length; måltid++) {
                        html += `
                    </tr>
                    <tr>
                        <td>${model.order[servitør][bord][måltid].måltid}</td>
                        `;
                        html += `
                        <td>`;
                        for (let nw = 0; nw < model.order[servitør][bord][måltid].notWanted.length; nw++) {
                            html += `
                                ${model.order[servitør][bord][måltid].notWanted[nw]}
                                `;
                            }
                            html += `
                                ${model.order[servitør][bord][måltid].kommentar}
                                </td>
                                <td><input
                                 ${model.order[servitør][bord][måltid].finnished ? "checked": ""} type="checkbox" onchange="cookFinnishedDish(${servitør}, ${bord}, ${måltid})"></td>
                            </tr> 
                            `;  
                    };  
                };
                html += `
                                <tr>
                                    <td style="border:none; height: 20px;"></td>
                                </tr>
                                `;
            };
                html +=`
                        </table>
                        `;
        divApp.innerHTML = html;
};