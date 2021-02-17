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
    redigerListe: [],
    leggTilRediger: "",
    
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
                        {name: 'Tacokrydder'},
                        {name: 'Tortilla'},
                        {name: 'Isbergsalat'},
                        {name: 'Slangeagurk'},
                        {name: 'Tomater'},
                        {name: 'Mais'},
                        {name: 'Gulost'},
                        {name: 'Rømme'},
                    ],
                },
                {
                    navn: 'Fersk vårruller med kylling',
                    pris: 100,
                    ingredients: [
                        {name: 'Kyllingfilet'},
                        {name: 'Gulrot'},
                        {name: 'Rød spisskål'},
                        {name: 'Vårløk'},
                        {name: 'Agurk'},
                        {name: 'Hjertesalat'},
                        {name: 'Koriander'},
                        {name: 'Salt'},
                        {name: 'Peppermiks'},
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
                        {name: 'Karbonadedeig'},
                        {name: 'Hvitløk'},
                        {name: 'Olje'},
                        {name: 'Tacokrydder'},
                        {name: 'Vann'},
                        {name: 'Røde bønner'},
                        {name: 'Rødløk'},
                        {name: 'Sitron'},
                        {name: 'Hjertesalat'},
                        {name: 'Tortillachips'},
                        {name: 'Vårløk'},
                        {name: 'Jalapeñog'},
                        {name: 'Frisk koriander'},
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
                        {name: 'Kakemix'},
                        
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
                        finnished: true,
                    },
                    {
                        måltid: 'Melk',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
                    },
                ],
                //Bord 1
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*"gluten", "laktose"*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],
                //Bord 2
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],

                //Bord 3
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
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
                        finnished: false,
                    }
                ],
                //Bord 1
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],
                //Bord 2
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],
                //Bord 3
                [
                    {
                        måltid: 'Taco',
                        pris: 100,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],
            ],
], 
            // model.order[i] = liste over alle bord.
                    // model.order[i][j] = liste over måltider på et bord.
                    // model.order[i][j][k] = et objekt med måltidet.
                    // model.order[i][j][k].notWanted = en liste over ikke ønskede ingredienser.
    completeOrder: [
        {
            måltid: 'Taco',
            pris: 100,
            notWanted: [/*ikke ønsket ingr*/],
            kommentar: '',
            waiter: 'Henrik',
            table: 'Bord 1',
        },
        {
            måltid: 'Taco',
            pris: 100,
            notWanted: [/*ikke ønsket ingr*/],
            kommentar: '',
            waiter: 'Henrik',
            table: 'Bord 2',
        },
    ], 
}