import express from 'express'
const router = express.Router();

const nekretnine = [
    {ID: 1,
    Naziv: "stan",
    Opis: "super",        
    Cijena: 10000,
    Lokacija: "pula",
    Broj_soba: 2,
    Površina: 20},
    {ID: 2,
    Naziv: "kuca",
    Opis: "okej",        
    Cijena: 15000,
    Lokacija: "pula",
    Broj_soba: 1,
    Površina: 30},
];

router.get('/', (req, res) =>{
    res.json(nekretnine);
})

export default router;