import express from 'express'
const router = express.Router();

const nekretnine = [
    {id: 1,
    Naziv: "stan",
    Opis: "super",        
    Cijena: 10000,
    Lokacija: "pula",
    Broj_soba: 2,
    Površina: 20},
    {id: 2,
    Naziv: "kuca",
    Opis: "okej",        
    Cijena: 15000,
    Lokacija: "pula",
    Broj_soba: 1,
    Površina: 30},
];

router.get('/', (req, res) => {
    res.json(nekretnine);
})

router.get('/:id', (req, res) => {
    const id_nek = req.params.id;
    const nek = nekretnine.find(nek => nek.id == id_nek);
    res.json(nek);
})

router.post('/dodaj', (req, res) => {
    const nova_nek = req.body;
    nekretnine.push(nova_nek);
    res.send('Dodali ste novu nekretninu');

})

export default router;