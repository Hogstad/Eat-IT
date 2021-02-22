function addCategoryView() {
    let html = "";
    html += `
            <div id="mainViewButtons">
            `;
            html += createWaitorOptions();
            html +=`
            <select id="select" onchange=GetSelectedValue(this) name="Legg til">
                <option>Legg til</option>
                <option value="1">Legg til ny Bruker</option>
                <option value="2">Legg til nytt Bord</option>
            </select>
                <button class="ordreButton" onclick="orderViewWaiter()">Ordre</button>
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
            <div id="addCategoryPoppUp" class="leggTilKnapper">
                <h3>Ny kategori</h3>
                <br>
            <form id="addCategoryPoppUpText">
                <label for="kname">Navn på kategori: </label>
                <br>
                <br>
                <input class="categoryInput" type="text" id="kategoriNameX" name="kname" oninput="getDataCategory(this.value)">
            </form>
                <br>
                <br>
                <br>
            <button id="addCategoryButton" disabled onclick="saveNewCategory()">Legg til</button
            </div>
            `;
        divApp.innerHTML = html;
};
