const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
// "database"
let cart = [];
let all = {
    shoes: [{
            name: 'Converse High Top',
            price: 10,
            id: 'converse1',
            picture: '/Assets/Shoes/Converse_HIgh_Tops.jpg',
            type: 'shoes'
        },
        {
            name: 'Nike Runner',
            price: 40,
            picture: '/Assets/Shoes/Nike_Runner.jpg',
            id: 'nike1',
            type: 'shoes'
        },
        {
            name: 'Moon Boots',
            price: 15,
            id: 'moonBoots1',
            picture: '/Assets/Shoes/Moon_Boots.jpg',
            type: 'shoes'
        },
        {
            name: 'Converse High Top',
            price: 10,
            id: 'converse1',
            picture: '/Assets/Shoes/Converse_HIgh_Tops.jpg',
            type: 'shoes'
        },
        {
            name: 'Nike Runner',
            price: 40,
            picture: '/Assets/Shoes/Nike_Runner.jpg',
            id: 'nike1',
            type: 'shoes'
        },
        {
            name: 'Moon Boots',
            price: 15,
            id: 'moonBoots1',
            picture: '/Assets/Shoes/Moon_Boots.jpg',
            type: 'shoes'
        }
    ],
    hats: [{
            name: 'SnapBack',
            price: 10,
            id: 'snapback1',
            picture: '/Assets/Hats/Snap_Back.jpg',
            type: 'hats'
        },
        {
            name: 'Cowboy',
            price: 20,
            id: 'cowboy1',
            picture: '/Assets/Hats/Cowboy.jpeg',
            type: 'hats'
        },
        {
            name: 'Fedora',
            price: 30,
            id: 'fedora1',
            picture: '/Assets/Hats/Fedora.jpg',
            type: 'hats'
        },
        {
            name: 'SnapBack',
            price: 10,
            id: 'snapback1',
            picture: '/Assets/Hats/Snap_Back.jpg',
            type: 'hats'
        },
        {
            name: 'Cowboy',
            price: 20,
            id: 'cowboy1',
            picture: '/Assets/Hats/Cowboy.jpeg',
            type: 'hats'
        },
        {
            name: 'Fedora',
            price: 30,
            id: 'fedora1',
            picture: '/Assets/Hats/Fedora.jpg',
            type: 'hats'
        }
    ]
};

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});
//sends cart array
app.get('/cart', (req, res) => {
    res.json(cart);
});
//sends all array
app.get('/all', (req, res) => {
    res.json(all);
});
//updates cart array
app.post('/cart', (req, res) => {
    let newItem = req.body.item;
    cart.push(newItem);
});
//clears contents of the cart array
app.delete('/cart', (req, res) => {
    let newCart = req.body.newCart;
    cart = newCart;
    res.json(newCart);
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080!');
});