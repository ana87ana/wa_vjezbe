import express from 'express';
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

    router.get("/actors", (req, res) => {
        res.status(200).json(actors);
    });
    
    router.get("/actors/:id", (req, res) => {
        const id_glumca = req.params.id;
        const actor = actors.find(actor => actor.id == id_glumca);
        if(actor){
            return res.status(200).json(actor);
        }else{
            return res.status(400).json({ message: "Ne postoji glumac s tim id-em!"})
        }
    });
    
    router.post("/actors", (req, res) => {
        const novi_glumac = req.body;
        let kljucevi = Object.keys(novi_glumac);
    
        if(!(kljucevi.includes('name') && kljucevi.includes('birthYear') && kljucevi.includes('movies'))){
            res.status(400).json({ message: "Nisu uneseni svi potrebni podatci"});
        }else{
            res.status(200).json({ message: "Uspješno dodan glumac"});
            movies.push(novi_glumac);
        }
    });
    
    router.patch("/actors/:id", (req, res) => {
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