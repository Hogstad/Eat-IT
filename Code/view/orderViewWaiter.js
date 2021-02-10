// skjermbilde 11!!!!!!!!!!!!!!!!

function orderViewWaiter() {
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
                <button>Legg til ny bruker</button>
                <button>Ordre</button>
            </div> 
                `;
                html += `
                <div id="oneDiv">
                `;
            for(let i = 0; i < model.category.length; i++) {
                html += `
                    <button id="mainViewCategory">${model.category[i].type}</button>    
               `;
            };
            html += `
                <button id="addCategory">Legg til</button>
            </div>
            `;
            html += `
            <div id="mainViewShowDishes">${model.showDishes}</div>
            `;
         
        divApp.innerHTML = html;
};
