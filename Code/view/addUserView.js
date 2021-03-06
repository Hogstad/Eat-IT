function addUserView() {
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
            <div id="addUserPoppUp" class="leggTilKnapper">
                <h3>Ny servitør</h3>
                <br>
            <form id="addUserPoppUpText">
                <label for="fname">Navn på servitør: </label>
                <input type="text" id="fname" name="fname" oninput="getDataWaitor(this.value)">
            </form>
                <br>
                <br>
                <br>
            <button id="saveNewWaitorButton" disabled onclick="saveNewWaitor()">Legg til</button
            </div>
            `;
        divApp.innerHTML = html;
};

