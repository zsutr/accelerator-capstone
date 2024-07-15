import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import NodeCache from 'node-cache'; // Ensure NodeCache is imported

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const imageCache = new NodeCache({ stdTTL: 86400, checkperiod: 3600 }); // Cache for 1 day

const checkImageLink = async (url) => {
  if (imageCache.has(url)) {
    return imageCache.get(url);
  }

  try {
    const response = await axios.get(url);
    const isValid = response.status === 200;
    imageCache.set(url, isValid);
    return isValid;
  } catch {
    imageCache.set(url, false);
    return false;
  }
};

const filterProductsWithValidImages = async (products) => {
  const checkPromises = products.map(async (product) => {
    const isValid = await checkImageLink(product.image_link);
    return isValid ? product : null;
  });

  const results = await Promise.all(checkPromises);
  return results.filter(product => product !== null);
};

const getProducts = async (filter = {}) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(dbName);
  const collection = db.collection('products');

  let query = { ...filter, image_link: { $ne: '', $exists: true } };
  let cursor = collection.find(query);

  
  try {
    const products = await cursor.toArray();
    const validProducts = await filterProductsWithValidImages(products);
    await client.close();
    return validProducts;
  } catch (err) {
    await client.close();
    console.error('Error fetching products:', err);
    throw err;
  }
};

// Home route with limit of 15 products
app.get('/', async (req, res) => {
  try {
    const products = await getProducts({});
    console.log('Fetched products:', products);  // Add this line for debugging

    res.json(products);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send("Couldn't load products");
  }
});

// Product by ID route
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection("products");
    const product = await collection.findOne({ id: +id });
    await client.close();

    res.json(product);
    console.log(product);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Couldn't load product");
  }
});

// Category route
app.get('/category/:type', async (req, res) => {
  const { type } = req.params;
  try {
    const products = await getProducts({ product_type: type });
    res.json(products);
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
