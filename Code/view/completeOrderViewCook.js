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
            for (let i = 0; i < model.completeOrder.length; i++) {
                html += `
                        <td><b>${model.completeOrder[i].waiter}, ${model.completeOrder[i].table}</b></td><br>
                `;
                html += `
                                <tr>
                                <td>${model.completeOrder[i].måltid}, ${model.completeOrder[i].notWanted}, ${model.completeOrder[i].kommentar}</td>
                                <td>Pris ${model.completeOrder[i].pris},-</td> 
                                <td style="border:none;"></td>
                                </tr>
                                `;
            };
                html +=`
                        </table>
                        `;
        divApp.innerHTML = html;
};

// html += `
// <table id="orderViewWaiterCss"style="width: 50%">
// `;
// for (let i = 0; i < model.completeOrder.length; i++) {
// html += `
//         <td><b>${model.waitor.names[i].name}</b></td><br>
// `;
// for (let bord = 0; bord < model.completeOrder[i].length; bord++) {
//     html+= `     
//     <tr>
//         <td><b>Bord ${bord + 1}</b></td>
//     `;
//     for (let måltid = 0; måltid < model.completeOrder[i][bord].length; måltid++) {
//         html += `
//     </tr>
//     <tr>
//         <td>${model.completeOrder[i][bord][måltid].måltid}</td>
//         `;
//         html += `
//         <td>`;
//         for (let nw = 0; nw < model.completeOrder[i][bord][måltid].notWanted.length; nw++) {
//             html += `
//                 ${model.completeOrder[i][bord][måltid].notWanted[nw]}
//                 `;
//             }
//             html += `
//                 ${model.completeOrder[i][bord][måltid].kommentar}
//                 </td>
//                 <td><input type="checkbox"></td>
//             </tr> 
//             `;  
//     };  
// };
// html += `
//                 <tr>
//                     <td style="border:none;"></td>
//                 </tr>
//                 `;
// };
// html +=`
//         </table>
//         `;