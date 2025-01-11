import express from 'express';
const router = express.Router();

const movies = [
    {
    "id": 4222334,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "genre": "Drama",
    "director": "Frank Darabont"
    },
    {
    "id": 5211223,
    "title": "The Godfather",
    "year": 1972,
    "genre": "Crime",
    "director": "Francis Ford Coppola"
    },
    {
    "id": 4123123,
    "title": "The Dark Knight",
    "year": 2008,
    "genre": "Action",
    "director": "Christopher Nolan"
    }
];

router.get("/movies", (req, res) => {
    res.status(200).json(movies);
});

router.get("/movies/:id", (req, res) => {
    const id_filma = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id == id_filma);
    if(movie){
        return res.status(200).json(movie);
    }else {
    return res.status(404).json({ message: 'Film nije pronađen' });
    }
});

router.post("/movies", (req, res) => {
    const novi_film = req.body;
    let kljucevi = Object.keys(novi_film);

    if(!(kljucevi.includes('title') && kljucevi.includes('year') && kljucevi.includes('genre') && kljucevi.includes('director'))){
        res.status(400).json({ message: "Nisu uneseni svi potrebni podatci"});
    }else{
        res.status(200).json({ message: "Uspješno dodan film"});
        movies.push(novi_film);
    }
});

router.patch("/movies/:id", (req, res) => {
    const id_film = req.params.id;
    const novi_film = req.body;

    const index = movies.findIndex(movie => movie.id == id_film);
if (index !== -1) {
for (const key in novi_film) {
movies[index][key] = novi_film[key];
}
res.json(movies[index]);
} else {
res.json({ message: 'Film s traženim ID-em ne postoji.' });
}
});

export default router;