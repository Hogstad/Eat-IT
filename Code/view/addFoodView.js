// skjermbilde 9, 10!!!!!!!!!

function addFoodView() {
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
            <div id="addCategoryFood">
                <h3>Legg til matrett</h3>
                <br>
            <form id="addCategoryFoodPoppUpText">
                <label for="foodname">Navn på rett: </label>
                <input type="text" id="kategoriName" name="foodname" oninput="getDataCategory(this.value)">
            </form>
                <br>
                <br>
                <br>
            <button onclick="">Legg til</button
            </div>
            `;
        divApp.innerHTML = html;
};
