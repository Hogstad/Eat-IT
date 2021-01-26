
mainView();
function mainView() {
    let html = "";
    html += `
            <button>Servitør</button>
            <button>Legg til ny bruker</button>
            <button>Ordre</button>`;
            
            for(let i = 0; i < model.category.length; i++) {
                html += `
                    <button onclick="printCategory(${i})">${model.category[i].type}</button>
               `;
            };
            html += `
            <div style="background-color: green;">${model.showDishes}</div>
        `;
        divApp.innerHTML = html;
};

