//Controller
// function endre bruker
// -bytte fra en bruker til en annen. blir valgt ut ifra en dropdown meny.

// function legg til bruker
// -legge til navnet til brukeren
// - legg til knapp

// function bytte til order
// -bytte over til order view

// function legge til ny kategori
// -legge til ny hovedkategori
// - legg til knapp

// function redigere matrett
// - redigere innhold på en rett
// - oppdatere matretten med nytt innhold

// function slett matrett
// -slette den valgte matretten

// function legge til ny matrett
// -legge til en ny matrett inne på den valgte kategorien.

// function checkbox
// -checkbox til ordre siden. 
html += `
<select onchange="selectedTable(this.value, true)"> `;
            for(let i = 0; i <model.tables.names.length; i++) {
                if (i == model.selectedTable) {
                    html += `
                    <option selected value="${i}">${model.tables.names[i].name}</option>
                    `;
                }
                else {
                    html += `
                    <option value="${i}">${model.tables.names[i].name}</option>
                    `;
                }
            }
            html += `
            </select>
            `;


html += `
<table style="width:60%">
`;
let retter = model.category[model.selectedCategory].retter[selectedFood];
for(let j = 0; j < retter.length; j++) {
    html += `
    <tr>
        <td>${j + 1}:</td>
        <td>${retter[j].ingredients}</td>
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

function boxIsChecked(index) {
    if (index === model.checkedBox) {
        model.checkedBox = ''; 
    }
    else {
        model.checkedBox = index;
    }
subView();
}