// skjermbilde 7, 8!!!!!!!!!!!!!!!!!!!

function orderViewCook() {
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
            `;
            html += `
            <table style="width:60%">
            `;
            let content = model.boxes[model.selectedBox].content;
            for(let j = 0; j < content.length; j++) {
                html += `
                <tr>
                    <td>${j + 1}:</td>
                    <td>${content[j].contentOfBox}</td>
                    `;
                    if (j === model.checkedBox) {
                       html += `
                       <td><input checked type="checkbox" onchange="boxIsChecked(${j})"></td>`;
                    }
                    else {
                        html += `
                        <td> <input type="checkbox" onchange="boxIsChecked(${j})"> </td>
                        `;
                    }
                    html += `
                </tr>
                `; 
            } 
            html += `
            </table>
            `;
        divApp.innerHTML = html;
};


//Sette inn table for alle greiene i model.category[].retter[].ingredients 
// Table med type på toppen "navn"
// Så pushe inn alle ingr.
// Så legge til en checkbox på siden.