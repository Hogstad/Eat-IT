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
                    pris: 129,
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
                    navn: 'Burger',
                    pris: 159,
                    ingredients: [
                        {name: 'Pommes bistro'},
                        {name: 'Bacon'},
                        {name: 'Cheddar'},
                        {name: 'Tomat'},
                        {name: 'Løk'},
                        {name: 'Avokado'},
                    ],
                },  
            ],
        },
        {
            type: 'Salat',
            retter: [
                {
                    navn: 'Gresk',
                    pris: 139,
                    ingredients: [
                        {name: 'Tomat'},
                        {name: 'Cherrytomat'},
                        {name: 'Rødløk'},
                        {name: 'Agurk'},
                        {name: 'Sorte oliven'},
                        {name: 'Tørket oregano'},
                        {name: 'Hjertesalat'},
                        {name: 'Fetaost'},
                        {name: 'Tzatziki'},
                    ],
                },
                {
                    navn: 'Pasta',
                    pris: 139,
                    ingredients: [
                        {name: 'Fullkornspasta'},
                        {name: 'Bacon'},
                        {name: 'Brokkoli'},
                        {name: 'Rødløk'},
                        {name: 'Eple'},
                        {name: 'Majones'},
                        {name: 'Lettrømme'},
                    ],
                },
            ],
        },
        {
            type: 'Dessert',
            retter: [
                {
                    navn: 'Fondant',
                    pris: 119,
                    ingredients: [
                        {name: 'Vaniljeis'},
                        {name: 'Friske bær'}, 
                    ],
                },
                {
                    navn: 'Pavlova',
                    pris: 119,
                    ingredients: [
                        {name: 'Vaniljekrem'},
                        {name: 'Friske bær'},
                    ],
                },
                // {
                //     navn: 'Fruktsalat',
                //     pris: 119,
                //     ingredients: [
                //         {name: 'Friske bær'},
                //         {name: 'Vaniljekrem'},  
                //     ],
                // },
            ],
        },
        {
            type: 'Drikke',
            retter: [
                {
                    navn: 'Mineralvann',
                    pris: 37,
                    ingredients: [
                        {name: 'Coca-Cola'},
                        {name: 'Pepsi Max'},
                        {name: 'Sprite'},
                        {name: 'Fanta'},
                        {name: 'Eplemost'},
                        
                    ],
                },
                // {
                //     navn: 'Vin på glass',
                //     pris: 109,
                //     ingredients: [
                //         {name: 'Husets hvite'},
                //         {name: 'Husets røde'},
                        
                //     ],
                // },
                // {
                //     navn: 'Øl & Cider',
                //     pris: 89,
                //     ingredients: [
                //         {name: 'Pilsner'},
                //         {name: 'IPA'},
                //         {name: 'Cider'},
                        
                //     ],
                // },
                {
                    navn: 'Kaffe & te',
                    pris: 34,
                    ingredients: [
                        {name: 'Kaffe'},
                        {name: 'Te'},
                        
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
                        pris: 129,
                        notWanted: ["kjøttdeig"],
                        kommentar: 'Vegetar rett',
                        finnished: true,
                    },
                ],
                //Bord 1
                [
                    {
                        måltid: 'Taco',
                        pris: 129,
                        notWanted: [/*"gluten", "laktose"*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],
                //Bord 2
                [
                    {
                        måltid: 'Taco',
                        pris: 129,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],

                //Bord 3
                [
                    {
                        måltid: 'Taco',
                        pris: 129,
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
                        pris: 129,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],
                //Bord 1
                [
                    {
                        måltid: 'Taco',
                        pris: 129,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],
                //Bord 2
                [
                    {
                        måltid: 'Taco',
                        pris: 129,
                        notWanted: [/*ikke ønsket ingr*/],
                        kommentar: '',
                        finnished: false,
                    }
                ],
                //Bord 3
                [
                    {
                        måltid: 'Taco',
                        pris: 129,
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
            pris: 129,
            notWanted: [/*ikke ønsket ingr*/],
            kommentar: '',
            waiter: 'Henrik',
            table: 'Bord 1',
        },
        {
            måltid: 'Taco',
            pris: 129,
            notWanted: [/*ikke ønsket ingr*/],
            kommentar: '',
            waiter: 'Henrik',
            table: 'Bord 2',
        },
        {
            måltid: 'Taco',
            pris: 129,
            notWanted: [/*ikke ønsket ingr*/],
            kommentar: '',
            waiter: 'Henrik',
            table: 'Bord 1',
        },
    ], 
}