const divApp = document.getElementById("app");
let html = "";


mainView();
function mainView() {
    html += `
            <button>Servitør</button>
            <button>Legg til ny bruker</button>
            <button>Ordre</button>`;
            
            for(let i = 0; i < model.category.length; i++) {
                html += `
                    <button onclick="printCategory()">${model.category[i].type}</button>
               `;
               printCategory(i);
            };
            
            divApp.innerHTML = html;
        }    

        function printCategory(i) {
            model.category[i].type = model.category[0].retter[0].navn;
        }
        