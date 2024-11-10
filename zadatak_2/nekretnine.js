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
    res.status(200).json(nekretnine);
});

router.get('/:id', (req, res) => {
    const id_nek = req.params.id;

    if (isNaN(id_nek)) {
        res.json({ message: 'Proslijedili ste parametar id koji nije broj!' });
        return;
    }

    const nek = nekretnine.find(nek => nek.id == id_nek);

    if (nek) {
    res.json(nek);
    } else {
    res.status(404);
    }
});

router.post('/dodaj', (req, res) => {
    const nova_nek = req.body;
    nova_nek.id = nekretnine.length + 1;
    nekretnine.push(nova_nek);
    res.status(201).send('Dodali ste novu nekretninu');

});

router.put('/:id', (req, res) => {
    const id_nek = req.params.id;
    const nova_nek = req.body;
    nova_nek.id = id_nek;

    const index = nekretnine.findIndex(nek => nek.id == id_nek);
    if (index !== -1) {
    nekretnine[index] = nova_nek;
    res.json(nekretnine[index]);
    } else {
    res.status(404).json({ message: 'Nekretnina s traženim ID-em ne postoji.' });
    }
    });

router.patch('/:id', (req, res) => {
    const id_nek = req.params.id;
    const nova_nek = req.body;
    const index = nekretnine.findIndex(nek => nek.id == id_nek);
    if (index !== -1) {
    for (const key in nova_nek) {
    nekretnine[index][key] = nova_nek[key];
    }
    res.json(nekretnine[index]);
    } else {
    res.status(404).json({ message: 'Nekretnina s traženim ID-em ne postoji.' });
    }
    });

router.delete('/:id', (req, res) => {
    const id_nek = req.params.id;
    const index = nekretnine.findIndex(nek => nek.id == id_nek);
    if (index !== -1) {
    nekretnine.splice(index, 1);
    res.status(200).json({ message: 'Nekretnina je uspješno obrisana.' });
    } else {
    res.status(404).json({ message: 'Nekretnina s traženim ID-em ne postoji.' });
    }
    });

export default router;