import { MongoClient, ObjectId } from 'mongodb';
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

const getProducts = async (filter = {}) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('products');
  const products = await collection.find({ ...filter, image_link: { $ne: '', $exists: true } }).toArray();
  const validProducts = await filterProductsWithValidImages(products);
  await client.close();
  return validProducts;
};

app.get('/', async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send("Couldn't load products");
  }
});

app.get('/:type', async (req, res) => {
  const { type } = req.params;
  try {
    const products = await getProducts({ product_type: type });
    res.json(products);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send("Couldn't load products");
  }
});

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
