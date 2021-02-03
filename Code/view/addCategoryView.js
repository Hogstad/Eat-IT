// skjermbilde 6!!!!!!!!!!!

function addCategoryView() {
    let html = "";
    html += `
            <div id="mainViewButtons">
                <button>Servitør</button>
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
