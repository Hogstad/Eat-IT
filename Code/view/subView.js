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
                    <button>${model.category[i].type}</button>
               `;
            };
        }    