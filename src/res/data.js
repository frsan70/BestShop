export const refrigerator = [
    {
        name:'מקרר 4 דלתות בנפח 530 ליטר',
        modal:'GR-B618SE',
        price:'6990₪',
        img: require('../assets/images/GRB618SE.jpeg'), // Provide the correct relative path to the image
    },
    {
        name:'מקרר 3 דלתות בנפח 816 ליטר',
        modal:'GR-B265MM',
        price:'9490₪',
        img: require('../assets/images/GRB265MM.jpeg'), // Provide the correct relative path to the image
    },
    {
        name:'מקרר מקפיא עליון Samsung אינוורטר',
        modal:'RT62K7044SL',
        price:'6790₪',
        img: require('../assets/images/RT62K7045SL.png'), // Provide the correct relative path to the image
    },

  
];

export const oven = [
    {
        name:"תנור בנוי Dual Cooking סמסונג דגם ",
        modal:'NV75K5541RB',
        price:'1790₪',
        img: require('../assets/images/NV75K5541RB.png'), // Provide the correct relative path to the image
    },
    {
        name:'תנור בנוי פירוליטי Dual Cooking של סמסונג בנפח ענק 75 ליטר',
        modal:'NV75K5571RS',
        price:'3590₪',
        img: require('../assets/images/NV75K5541RS.png')
    },
    {
        name:'תנור בנוי פירוליטי Dual Cook Flex בנפח 75 ליטר עם חיבור Wifi ושליטה דרך אפליקציה',
        modal:'NV75N7677RS',
        price:'4390₪',
        img: require('../assets/images/NV7677.png')
    },
]
export const hob =[
    {
        name:' כיריים אינדוקציה Power control, סדרת הכיריים המאפשרת חיבור לכל סוגי השקעים',
        modal:'NZ64N7757FK',
        price:'3190₪',
        img: require('../assets/images/NZ64N7757FK.png')
    },
    {
        name:"כיריים אינדוקציה Virtual flame samsung" ,
        modal:'NZ84J9770EK',
        price:'5290₪',
        img: require('../assets/images/NZ84J9770EK.png')
    },
    {
        name:"כיריים אינדוקציה מבית סמסונג עם סליידר לחימום מהיר" ,
        modal:' NZ64H37070K',
        price:'5290₪',
        img: require('../assets/images/NZ64H37070K.png')
    }

]

    export const dishwasher=[
        {
            name:' מדיח עומד נירוסטה סאמסונג 14 ',
            modal: "DW60BS7513SL",
            price: "3849₪",
            img: require( '../assets/images/DW60BS7513SL.png')    
        },
        {
            name:' מדיח עומד נירוסטה סאמסונג אנטגראלי מלא',
            modal: "DW60BS7503BI",
            price:"3990₪",
            img: require( '../assets/images/DW60BS7503BI.png')
        },
        {
            name:' מדיח עומד נירוסטה סאמסונג 13 ',
            modal: "DW60BS7300SL",
            price: "3599₪",
            img: require( '../assets/images/DW60BS7300SL.png') 
            

        }
    ]
    export const microwave =[
        {
            name:'מיקרוגל משולב גריל ואפיה',
            modal: "MC28H5125AK",
            price: "949₪",
            img: require( '../assets/images/MC28H5125AK.png') 

        },
        {
            name:"מיקרוגל Samsung Bespoke",
            modal: "MS23T5018AC",
            price: "880₪",
            img: require('../assets/images/MS23T5018AC.png') 

        },
        {
            name:"מיקרוגל משולב גריל ואפיה",
            modal: "MC28A5125AK",
            price: "1340₪",
            img: require('../assets/images/MC28A5125AK.png') 
        }
    ]



export const ProductsData=[
    {
        name:'מקררים',
        data:[...refrigerator],
        id:1
    },
    {
        name:'תנורים',
        data:[...oven,],
        id:2
    },
    {
        name:'כיריים',
        data:[...hob],
        id:3
    },
    {
        name:"מדיח כילים",
        data:[...dishwasher],
        id:4
    },
    {
        name:"מיקרוגל",
        data:[...microwave],
        id:5
    }

    
]

