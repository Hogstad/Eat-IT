function addTableView() {
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
            <div id="addUserPoppUp">
                <h3>Nytt Bord</h3>
                <br>
            </form>
                <br>
                <br>
                <br>
            <button onclick="newTable()">Legg til nytt bord</button
            </div>
            `;
        divApp.innerHTML = html;
};

