const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('mongoose');
const mongoConnection = mongoose.connect('mongodb://192.168.99.100:27018', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let mongoItemModel = new mongoose.model(
    'Item', 
    new mongoose.Schema({ value: Number, name: String, stock: Number })
);

const mysql = require('mysql');
const mysqlConnection = mysql.createPool({
    host     : '192.168.99.100',
    port     : 3307,
    user     : 'root',
    password : 'root',
    database : 'persistencia',
});

app.use('/', express.static(path.join(__dirname, 'public')));

// Get do Mongo na lista de items;
app.get('/items', async (req, res) => {
    try {
        let items = await mongoItemModel.find({});
        return res.status(200).json({ items: items });
    } catch(err) {
        console.log(err)
        return res.status(500).json({});
    }
});

// Adicionar item à base de dados
app.post('/items', async (req, res) => {
    try {
        let { name, value } = req.body;

        let item = new mongoItemModel({
            name, 
            value
        });

        await item.save();

        await mysqlConnection.query(`
            INSERT INTO "Items" (name, value)
            VALUES (${name}, ${value});
        `);

        return res.status(200).json({});
    } catch(err) {
        console.log(err)
        return res.status(500).json({});
    }
});

// Get do MYSQL nos itens do carrinho;
app.post('/review', async (req, res) => {
    try {
        let { itemNames } = req.body;
        console.log(
            `
            SELECT * 
            FROM persistencia.Items
            WHERE name IN (${(JSON.parse(itemNames)).map(i => `'${i}'`).join(',')});`
        )
        
        let items = await mysqlConnection.query(`
            SELECT * 
            FROM persistencia.Items
            WHERE name IN (
                ${
                    (JSON.parse(itemNames)).map(i => `'${i}'`).join(',')
                }
            );`
        );
    
        return res.status(200).json({ items: items.results });
    } catch(err) {
        console.log(err)
        return res.send(500).json();
    }
});

// Transaction MYSQL no checkout;
app.post('/checkout', async (req, res) => {
    let { itemNames } = req.body;

    try {
        await Promise.all(
            itemNames.map(i => 
                mysqlConnection.query(`
                    DELETE FROM Item
                    WHERE name = ${i};
                `)
            )
        );

        await Promise.all(
            itemNames.map(i => 
                mongoItemModel.deleteOne({ name: i })
            )
        );

        return res.status(200).json();
    } catch (err) {
        return res.status(500).json({ message: "Houve um erro" });
    }
});

app.listen(3000);