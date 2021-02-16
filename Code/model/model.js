//model
const divApp = document.getElementById("app");

const model = {
    selectedWaitor: "0",
    selectedTable: 0,
    selectedCategory: "",
    selectedFood: "",
    addWaitor: "",
    addCategory: "",
    addRetter: "",
    addIngredients: "",
    addPris: "",
    showDishes: "",
    checkedBox: "",
    kommentar: "",
    notWanted: [],
    
    waitor: {
        names: [
            {name: 'Henrik'},
            {name: 'Flemming'},
        ],   
    },

    tables: {
        names: [
            {name: 'Bord 1'},
            {name: 'Bord 2'},
            {name: 'Bord 3'},
            {name: 'Bord 4'},
        ],   
    },

    category: [
        {
            type: 'Varmretter',
            retter: [
                {
                    navn: 'Taco',
                    pris: 100,
                    ingredients: [
                        {name: 'Kjøttdeig'},
                        {name: 'tacokrydder'},
                        {name: 'tortilla'},
                        {name: 'isbergsalat'},
                        {name: 'slangeagurk'},
                        {name: 'tomater'},
                        {name: 'mais'},
                        {name: 'gulost'},
                        {name: 'rømme'},
                    ],
                },
                {
                    navn: 'Fersk vårruller med kylling',
                    pris: 100,
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
                    pris: 100,
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
                    pris: 100,
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
                    pris: 100,
                    ingredients: [
                        {name: 'Ku Melk'},
                        
                    ],
                },
            ],
        },
    ], 

        // model.order[i] = liste over alle bord.
        // model.order[i][j] = liste over måltider på et bord.
        // model.order[i][j][k] = et objekt med måltidet.
        // model.order[i][j][k].notWanted = en liste over ikke ønskede ingredienser.

        // Servitører
    order: [
            // Bord
            [
                // Måltider
                [
                    // Måltid
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: ["kjøttdeig"],
                        kommentar: 'Vegetar rett',
                    },
                    {
                        måltid: 'Melk',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    },
                ],
                //Bord 1
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*"gluten", "laktose"*/],
                        kommentar: '',
                    }
                ],
                //Bord 2
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],

                //Bord 3
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
            ],
            //servitør 1
            [
                //Bord 0
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
                //Bord 1
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
                //Bord 2
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
                //Bord 3
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
            ],
], 
}