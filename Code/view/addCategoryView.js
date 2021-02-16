// skjermbilde 6!!!!!!!!!!!

function addCategoryView() {
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
            <div id="addCategoryPoppUp">
                <h3>Ny kategori</h3>
                <br>
            <form id="addCategoryPoppUpText">
                <label for="kname">Navn på kategori: </label>
                <input type="text" id="kategoriName" name="kname" oninput="getDataCategory(this.value)">
            </form>
                <br>
                <br>
                <br>
            <button onclick="saveNewCategory()">Legg til</button
            </div>
            `;
        divApp.innerHTML = html;
};
