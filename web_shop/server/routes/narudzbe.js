import express from 'express'
import { Proizvod, proizvodi } from '../data.js'

const router = express.Router();

class Narudzba{
    constructor(id, naruceni_proizvdi){
        this.id = id,
        this.naruceni_proizvdi = naruceni_proizvdi;
    }

    get ukupnaCijena() {
        let ukupno = this.naruceni_proizvod.reduce((suma, trenutni_proizvod) => {
            let proizvod_obj = proizvod.find(p => p.id == trenutni_proizvod.id);
            return suma + proizvod_obj.cijena * trenutni_proizvod.narucena_kolicina;
        }, 0);
        return ukupno;
    }
}

let narudzbe = [];



// id narudzbe
// polje proizvoda koji su instance klase Proizvod
//kolicina

let dummy_narudzba = new Narudzba(1, [
        { id:1 , velicina: 'M', narucena_kolicina: 2},
        { id:3, velicina: 'onesize', narucena_kolicina: 1}
    ]);

narudzbe.push(dummy_narudzba);

router.post('/', (req, res) => {
    let podatci = req.body;
    let naruceni_proizvodi = podatci.naruceni_proizvdi;
    let id_nove_narudzbe =  narudzbe.length ? narudzbe.at(-1).id +1 : 1
    
    const narudzba_obj = new Narudzba(id_nove_narudzbe, naruceni_proizvodi);

    narudzbe.push(narudzba_obj);
    res.status(201).json(podatci);
});

export default router;