
mainView();
function mainView() {
    let html = "";
    html += `
            <div id="mainViewButtons">
                <button>Servitør</button>
                <button>Legg til ny bruker</button>
                <button>Ordre</button>
            </div>
                <button id="midlertidig">Legg til ny</button> 
                `;
            for(let i = 0; i < model.category.length; i++) {
                html += `
                    <div id="mainViewCategory">
                        <button onclick="printCategory(${i})">${model.category[i].type}</button>
                    </div>
               `;
            };
            html += `
            <div id="mainViewShowDishes">${model.showDishes}</div>
            `;
        divApp.innerHTML = html;
};

