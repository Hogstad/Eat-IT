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
            for(let j = 0; j < model.category.length; j++) {
                html += `
                    <h2>${model.category[j].retter[0].navn}</h2>
                `; 
                printIngredients(j);
            }
            console.log(html);
         divApp.innerHTML = html;
}

function printIngredients(j) {
    for(let ingredient = 0; ingredient < model.category[j].retter[0].ingredients.length; ingredient++) {
        html += `    
                <h4>${model.category[j].retter[0].ingredients[ingredient].name}</h4>   
                `;
    }
}


{/* <button>Legg til ny</button>
<h3>${model.category[0].retter[0].navn}</h3>
<p>${model.category[0].retter[0].ingredients}</p>
<button>Rediger</button> */}

 //<p>ingredients: ${model.category[j].retter[j].ingredients}</p>