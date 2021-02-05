//model
const divApp = document.getElementById("app");

const model = {
    selectedWaitor: "",
    addWaitor: "",
    showDishes: "",
    addCategory: "",
    selectedCategory: "",
    addRetter: "",
    addIngredients: "",

    waitor: {
        names: [
            {name: 'Henrik'},
            {name: 'Flemming'},
        ],   
    },

    category: [
        {
            type: 'Varmretter',
            retter: [
                {
                    navn: 'Taco',
                    pris: 'number',
                    ingredients: [
                        {name: 'Kjøttdeig'},
                        {name: 'tacokrydder'},
                        {name: 'tortilla'},
                        {name: 'isbergsalat'},
                        {name: 'slangeagurk'},
                        {name: 'tomater'},
                        {name: 'tomater'},
                        {name: 'mais'},
                        {name: 'gulost'},
                        {name: 'rømme'},
                    ],
                },
                {
                    navn: 'Fersk vårruller med kylling',
                    pris: 'number',
                    ingredients: [
                        {name: 'kyllingfilet'},
                        {name: 'gulrot'},
                        {name: 'rød spisskål'},
                        {name: 'vårløk'},
                        {name: 'agurk'},
                        {name: 'hjertesalat'},
                        {name: 'koriander'},
                        {name: 'salt'},
                        {name: 'peppermiks'},
                    ],
                },  
            ],
        },
        {
            type: 'Salat',
            retter: [
                {
                    navn: 'Taco Salat',
                    pris: 'number',
                    ingredients: [
                        {name: 'karbonadedeig'},
                        {name: 'hvitløk'},
                        {name: 'olje'},
                        {name: 'tacokrydder'},
                        {name: 'vann'},
                        {name: 'røde bønner'},
                        {name: 'rødløk'},
                        {name: 'sitron'},
                        {name: 'hjertesalat'},
                        {name: 'tortillachips'},
                        {name: 'vårløk'},
                        {name: 'jalapeñog'},
                        {name: 'frisk koriander'},
                    ],
                },
            ],
        },
        {
            type: 'Dessert',
            retter: [
                {
                    navn: 'Kake',
                    pris: 'number',
                    ingredients: [
                        {name: 'kakemix'},
                        
                    ],
                },
            ],
        },
        {
            type: 'Drinks',
            retter: [
                {
                    navn: 'Melk',
                    pris: 'number',
                    ingredients: [
                        {name: 'Ku Melk'},
                        
                    ],
                },
            ],
        },
    ],    
}  