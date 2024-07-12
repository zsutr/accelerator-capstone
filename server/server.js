import {MongoClient, ObjectId} from 'mongodb'
//import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express'

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const app = express();
const PORT = 3001;

//app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("products")
       const products = await collection.find().limit(15).toArray();

       res.json(products);
       console.log(products)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load products");
    }
});
app.get('/blush', async (req, res) => {
    try {
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("products")
       const blushes = await collection.find({'product_type':'blush'}).toArray();

       res.json(blushes);
       console.log(blushes)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load products");
    }
});

app.get('/mascara', async (req, res) => {
    try {
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("products")
       const mascaras = await collection.find({'product_type':'mascara'}).toArray();

       res.json(mascaras);
       console.log(mascaras);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load products");
    }
});

app.get('/eyebrow', async (req, res) => {
    try {
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("products")
       const eyebrows = await collection.find({'product_type':'eyebrow'}).toArray();

       res.json(eyebrows);
       console.log(eyebrows);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load products");
    }
});

app.get('/eyeshadow', async (req, res) => {
    try {
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("products")
       const eyeshadows = await collection.find({'product_type':'eyeshadow'}).toArray();

       res.json(eyeshadows);
       console.log(eyeshadows);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load products");
    }
});

app.get('/foundation', async (req, res) => {
    try {
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("products")
       const foundations = await collection.find({'product_type':'foundation'}).toArray();

       res.json(foundations);
       console.log(foundations)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load products");
    }
});

app.get('/lipstick', async (req, res) => {
    try {
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("products")
       const lipsticks = await collection.find({'product_type':'lipstick'}).toArray();

       res.json(lipsticks);
       console.log(lipsticks);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load products");
    }
});
 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});