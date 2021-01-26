
mainView();
function mainView() {
    let html =  `
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
}    

//addfood
//skisse

const items = [], index;
document.getElementById('app').onclick = function () {
    location.href = 'model.js';
}
for(let i = 0; i < model.category.retter.ingredients.length; i++) {
model.category.retter.push(category.retter[index].ingredients 
    ||                                                              //start
    model.category.retter.unshift(category.retter[i].ingredients)); //slutt
return items[index != '']; //?
}

        