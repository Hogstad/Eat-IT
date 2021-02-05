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
            pris: 'number',
            retter: [
                {
                    navn: 'Taco Salat',
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
            pris: 'number',
            retter: [
                {
                    navn: 'Kake',
                    ingredients: [
                        {name: 'kakemix'},
                        
                    ],
                },
            ],
        },
        {
            type: 'Drinks',
            pris: 'number',
            retter: [
                {
                    navn: 'Melk',
                    ingredients: [
                        {name: 'Ku Melk'},
                        
                    ],
                },
            ],
        },
    ],    
}  