// skjermbilde 6!!!!!!!!!!!

function addCategoryView() {
    let html = "";
    html += `
            <div id="mainViewButtons">
            `;
            html += createWaitorOptions();
            html +=`
                <button onclick="addUserView()">Legg til ny bruker</button>
                <button onclick="orderViewWaiter()">Ordre</button>
            </div> 
                `;
                html += `
                <div id="oneDiv">
                `;
            for(let i = 0; i < model.category.length; i++) {
                html += `
                    <button onclick="printCategory(${i})" id="mainViewCategory">${model.category[i].type}</button>    
               `;
            };
            html += `
            <button id="addCategory" onclick="addCategoryView()">Legg til</button>
            </div>
            `;
            html += `
            <div id="mainViewShowDishes"></div>
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
