import {MongoClient, ObjectId} from 'mongodb'
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express'

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

//
app.get('/blush', async (req, res) => {
    try {
       //const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("products")
      // const films_characters = await collection.find({ id: parseInt(id) }).toArray();
       const blushes = await collection.find({'product_type':'blush'}).toArray();

       res.json(blushes);
       console.log(blushes)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load products");
    }
});
 











app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});