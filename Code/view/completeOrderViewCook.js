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
                <button onclick="mainView()">Home</button>
                <button onclick="orderViewWaiter()">Ordre</button>
            </div> 
            `;
            html += `
                <table id="orderViewWaiterCss"style="width: 50%">
                `;
            for (let servitør = 0; servitør < model.completeOrder.length; servitør++) {
                html += `
                        <td><b>${model.waitor.names[servitør].name}</b></td><br>
                `;
                for (let bord = 0; bord < model.completeOrder[servitør].length; bord++) {
                    html+= `     
                    <tr>
                        <td><b>Bord ${bord + 1}</b></td>
                    `;
                    for (let måltid = 0; måltid < model.completeOrder[servitør][bord].length; måltid++) {
                        html += `
                    </tr>
                    <tr>
                        <td>${model.completeOrder[servitør][bord][måltid].måltid}</td>
                        `;
                        html += `
                        <td>`;
                        for (let nw = 0; nw < model.completeOrder[servitør][bord][måltid].notWanted.length; nw++) {
                            html += `
                                ${model.completeOrder[servitør][bord][måltid].notWanted[nw]}
                                `;
                            }
                            html += `
                                ${model.completeOrder[servitør][bord][måltid].kommentar}
                                </td>
                                <td><input type="checkbox"></td>
                            </tr> 
                            `;  
                    };  
                };
                html += `
                                <tr>
                                    <td style="border:none;"></td>
                                </tr>
                                `;
            };
                html +=`
                        </table>
                        `;
        divApp.innerHTML = html;
};

//Sette inn table for alle greiene i model.category[].retter[].ingredients 
// Table med type på toppen "navn"
// Så pushe inn alle ingr.
// Så legge til en checkbox på siden.
