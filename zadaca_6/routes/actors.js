import express from 'express';
import { body, validationResult, query, param, check } from 'express-validator';
import { pronadiActor } from '../middleware/actors.js';
const router = express.Router();

const actors = [
    {
    "id": 123,
    "name": "Morgan Freeman",
    "birthYear": 1937,
    "movies": [4222334]
    },
    {
    "id": 234,
    "name": "Marlon Brando",
    "birthYear": 1924,
    "movies": [5211223]
    },
    {
    "id": 345,
    "name": "Al Pacino",
    "birthYear": 1940,
    "movies": [5211223]
    }
];

    router.get("/", [check('name').isString().withMessage('Mora biti string'), check('username').trim().notEmpty().withMessage('Polje je obavezno!')], async (req, res) => {
        res.status(200).json(actors);
    });
    
    router.get("/:id", [pronadiActor, check('id').isInt().withMessage('Mora biti integer')], async (req, res) => {
        res.status(200).json(req.actor);
    });
    
    router.post("/", [check('name').exists().withMessage('name mora postojati'), check('birthYear').exists().withMessage('birthYear mora postojati')], async (req, res) => {
        const novi_glumac = req.body;
        let kljucevi = Object.keys(novi_glumac);
    
        if(!(kljucevi.includes('name') && kljucevi.includes('birthYear') && kljucevi.includes('movies'))){
            res.status(400).json({ message: "Nisu uneseni svi potrebni podatci"});
        }else{
            res.status(200).json({ message: "Uspješno dodan glumac"});
            movies.push(novi_glumac);
        }
    });
    
    router.patch("/:id", [check('name').exists().withMessage('name mora postojati'), check('birthYear').exists().withMessage('birthYear mora postojati')], async (req, res) => {
        const id_glumac = req.params.id;
        const novi_glumac = req.body;
    
        const index = actors.findIndex(actor => actor.id == id_glumac);
    if (index !== -1) {
    for (const key in novi_glumac) {
    actors[index][key] = novi_glumac[key];
    }
    res.json(actors[index]);
    } else {
    res.json({ message: 'Glumac s traženim ID-em ne postoji.' });
    }
    });

    export default router;