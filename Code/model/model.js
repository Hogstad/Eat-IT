//model
const divApp = document.getElementById("app");

const model = {
    selectedWaitor: "",
    selectedTable: "",
    selectedCategory: "",
    selectedFood: "",
    addWaitor: "",
    addCategory: "",
    addRetter: "",
    addIngredients: "",
    addPris: "",
    showDishes: "",
    checkedBox: "",
    
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
                    pris: '100,-',
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
                    pris: '100,-',
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
                    pris: '100,-',
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
                    pris: '100,-',
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
                    pris: '100,-',
                    ingredients: [
                        {name: 'Ku Melk'},
                        
                    ],
                },
            ],
        },
    ], 
    Order: [
            //servitør 0
            [
                //Bord 0
                [
                    {
                        måltid: 'taco',
                        pris: '100,-',
                        notWantet: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    },
                    {
                        måltid: 'Melk',
                        pris: '100,-',
                        notWantet: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
                //Bord 1
                [
                    {
                        måltid: 'taco',
                        pris: '100,-',
                        notWantet: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
                //Bord 2
                [
                    {
                        måltid: 'taco',
                        pris: '100,-',
                        notWantet: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
            ],
            //servitør 1
            [
                //Bord 0
                [
                    {
                        måltid: 'taco',
                        pris: '100,-',
                        notWantet: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
                //Bord 1
                [
                    {
                        måltid: 'taco',
                        pris: '100,-',
                        notWantet: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
                //Bord 2
                [
                    {
                        måltid: 'taco',
                        pris: '100,-',
                        notWantet: [/*ikke ønsket ingr*/],
                        kommentar: '',
                    }
                ],
            ],
], 
}