function addFoodView() {
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
            <div id="addCategoryFood" class="leggTilKnapper">
                <h2>Legg til matrett og ingredienser</h2>
                <br>
            <form id="addCategoryFoodPoppUpText">
                <label for="foodname">Navn på rett: </label>
                <input type="text" id="kategoriName" name="foodname" oninput="getDataCategoryTwo(this.value)">
            </form>
            <form id="addCategoryFoodTwoPoppUpText">
                <label for="foodTwoname">Navn på ingr: </label>
                <input type="text" id="kategoriNameTwo" name="foodTwoname" oninput="getDataCategoryThree(this.value)">
            </form>
            <form id="addCategoryFoodThreePrice">
                <label for="foodPrice">Pris på rett: </label>
                <input type="text" id="kategoriPrice" name="foodPrice" oninput="getDataCategoryPrice(this.value)">
            </form>
            <br>
            <button id="saveNewRetterButton" disabled onclick="saveNewRetter()">Legg til</button
            </div>
            `;
        divApp.innerHTML = html;
};
