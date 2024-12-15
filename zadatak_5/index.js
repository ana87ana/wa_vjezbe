import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './db.js';

const app = express();
app.use(express.json());
app.use(cors());

const db = await connectToDatabase();


app.get('/', (req, res) => {
  res.send('Pizza app');
});

app.get('/pizze', async (req, res) => {
  let pizze_collection = db.collection('pizze');
  let pizze_rezultati = await pizze_collection.find().toArray();
  console.log(pizze_rezultati);

  res.status(200).json(pizze_rezultati);
});


app.get('/pizze/:naziv', async (req, res) => {
  let pizze_collection = db.collection('pizze');
  let naziv_param = req.params.naziv;
  let pizza = await pizze_collection.find({ naziv: naziv_param }).toArray();
  console.log(pizza);

  res.status(200).json(pizza);
});


app.post('/pizze', async (req, res) => {
  let pizze_collection = db.collection('pizze');
  let nova_pizza = req.body;
  if (!naziv || typeof cijena !== "number" || !slika || !Array.isArray(sastojci) || !sastojci.every(s => typeof s === "string")) {
    return res.status(400).json({ error: "Invalid input" });
  }
  try {
  let result = await pizze_collection.insertOne(nova_pizza);
  res.status(201).json({ insertedId: result.insertedId }); 
  } catch (error) {
  console.log(error.errorResponse);
  res.status(400).json({ error: error.errorResponse });
  }
  });

const PORT = 3000;
app.listen(PORT, error => {
  if (error) {
    console.log('Greška prilikom pokretanja servera', error);
  }
  console.log(`Pizza poslužitelj radi na http://localhost:${PORT}`);
});

