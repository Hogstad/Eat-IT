// skjermbilde 5!!!!!!!!!!!!!

function addUserView() {
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
            <div id="addUserPoppUp">
                <button>Servitør</button
                <br>
            <form id="addUserPoppUpText">
                <label for="fname">Navn på servitør: </label>
                <input type="text" id="fname" name="fname" oninput="getData(this.value)">
            </form>
                <br>
                <br>
                <br>
            <button onclick="saveNewWaitor()">Legg til</button
            </div>
            `;
        divApp.innerHTML = html;
};

