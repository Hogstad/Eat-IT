function addFoodView() {
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
            <div id="addCategoryFood">
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
            <button onclick="saveNewRetter()">Legg til</button
            </div>
            `;
        divApp.innerHTML = html;
};
