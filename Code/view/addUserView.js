// skjermbilde 5!!!!!!!!!!!!!

function addUserView() {
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
                <button onclick="addUserView()">Legg til ny bruker</button>
                <button onclick="orderViewWaiter()">Ordre</button>
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
            <div id="addUserPoppUp">
                <h3>Ny servitør</h3>
                <br>
            <form id="addUserPoppUpText">
                <label for="fname">Navn på servitør: </label>
                <input type="text" id="fname" name="fname" oninput="getDataWaitor(this.value)">
            </form>
                <br>
                <br>
                <br>
            <button onclick="saveNewWaitor()">Legg til</button
            </div>
            `;
        divApp.innerHTML = html;
};

