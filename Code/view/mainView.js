const divApp = document.getElementById("app");



mainView();
function mainView() {
    let html = "";
    html += `
            <button>Servitør</button>
            <button>Legg til ny bruker</button>
            <button>Ordre</button>`;
            
            for(let i = 0; i < model.category.length; i++) {
                html += `
                    <button>${model.category[i].type}</button>
               `;
            }
            html +=`
            
            <button>Legg til ny</button>
            <h3>Taco:</h3>
            <button>Rediger</button>
            
           `;      
    divApp.innerHTML = html;
}
