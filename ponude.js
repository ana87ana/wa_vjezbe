import express from 'express'
const router = express.Router();

const ponude = [
    {
        id: 1,
        id_nekretnine: 1,
        ime_kupca: "ivan",
        prezime_kupca: "ivanic",
        ponuđena_cijena: 13000,
        broj_telefona: "0999999999"
    },
    {
        id: 2,
        id_nekretnine: 2,
        ime_kupca: "iva",
        prezime_kupca: "ivic",
        ponuđena_cijena: 20000,
        broj_telefona: "011111111"
    }
]

router.post('/', (req, res) => {
    const nova_ponuda = req.body;
    const index = ponude.find(nek => nek.id == nova-nova_ponuda.id_nekretnine);

    if (!index) return res.status(404).send('Nekretnina s traženim ID-em ne postoji.');
    if (!(nova_ponuda.ime_kupca && nova_ponuda.prezime_kupca && nova_ponuda.ponuđena_cijena == null && nova_ponuda.broj_telefona)) {
        return res.status(400).send('Svi podaci moraju biti popunjeni.');
    }

    nova_ponuda.id = ponude.length + 1;
    ponude.push(nova_ponuda);
    res.status(201).send('Dodali ste novu ponudu');
})

export default router;