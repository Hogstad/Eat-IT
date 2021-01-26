//model


const model = {
    waitor: {
        name: [
            {name: 'Henrik', isSelected: true},
            {name: 'Flemming', isSelected: false},
            {name: 'Sindre', isSelected: false},
        ],   
    },

    showDishes: "", 
    
    category: [
        {
            type: 'Varmretter',
            retter: [
                {
                    navn: 'Taco',
                    ingredients: [
                        {name: 'Kjøttdeig', isSelected: true },
                        {name: 'tacokrydder', isSelected: true },
                        {name: 'tortilla', isSelected: true },
                        {name: 'isbergsalat', isSelected: true },
                        {name: 'slangeagurk', isSelected: true },
                        {name: 'tomater', isSelected: true },
                        {name: 'tomater', isSelected: true },
                        {name: 'mais', isSelected: true },
                        {name: 'gulost', isSelected: true },
                        {name: 'rømme', isSelected: true },
                    ],
                },   
            ],
        },
        {
            type: 'Salat',
            retter: [
                {
                    navn: 'Taco Salat',
                    ingredients: [
                        {name: 'karbonadedeig', isSelected: true },
                        {name: 'hvitløk', isSelected: true },
                        {name: 'olje', isSelected: true },
                        {name: 'tacokrydder', isSelected: true },
                        {name: 'vann', isSelected: true },
                        {name: 'røde bønner', isSelected: true },
                        {name: 'rødløk', isSelected: true },
                        {name: 'sitron', isSelected: true },
                        {name: 'hjertesalat', isSelected: true },
                        {name: 'tortillachips', isSelected: true },
                        {name: 'vårløk', isSelected: true },
                        {name: 'jalapeñog', isSelected: true },
                        {name: 'frisk koriander', isSelected: true },
                    ],
                },
            ],
        },
        {
            type: 'Dessert',
            retter: [
                {
                    navn: 'Kake',
                    ingredients: [
                        {name: 'kakemix', isSelected: true },
                        
                    ],
                },
            ],
        },
        {
            type: 'Drinks',
            retter: [
                {
                    navn: 'Melk',
                    ingredients: [
                        {name: 'Ku Melk', isSelected: true },
                        
                    ],
                },
            ],
        },
    ],    
}  