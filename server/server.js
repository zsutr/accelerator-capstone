import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
 
dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
 
const app = express();
const PORT = 3001;
 
app.use(cors());
app.use(express.json());
 
const checkImageLink = async (url) => {
  try {
    const response = await axios.get(url);
    return response.status === 200;
  } catch {
    return false;
  }
};
 
const filterProductsWithValidImages = async (products) => {
  const validProducts = [];
  for (const product of products) {
    if (await checkImageLink(product.image_link)) {
      validProducts.push(product);
    }
  }
  return validProducts;
};
 
const getProducts = async (filter = {}, limit = 0) => {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('products');
    let query = { ...filter, image_link: { $ne: '', $exists: true } };
    let cursor = collection.find(query);
    if (limit > 0) {
      cursor = cursor.limit(limit);
    }
    try {
      const products = await cursor.toArray();
      const validProducts = await filterProductsWithValidImages(products);
      await client.close();
      return validProducts;
    } catch (err) {
      console.error('Error fetching products:', err);
      throw err;
    }
  };

 
// Home route with limit of 15 products
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
 
// Product by ID route
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const collection = db.collection("products")
      const product = await collection.findOne({ id: +id });

      res.json(product);
      console.log(product);
   } catch (err) {
       console.error("Error:", err);
       res.status(500).send("Couldn't load products");
   }
});
 
// Category route
app.get('/category/:type', async (req, res) => {
    const { type } = req.params;
    try {
      const client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const collection = db.collection('products');
      const products = await collection.find({ product_type: type }).toArray();
      res.json(products);
      console.log(products);
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send("Couldn't load products");
    }
  });
 
// Search route
app.post('/search', async (req, res) => {
  const { searchTerm } = req.body;
  try {
    const products = await getProducts({ name: { $regex: searchTerm, $options: 'i' } });
    res.json(products);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send("Couldn't load products");
  }
});
 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});