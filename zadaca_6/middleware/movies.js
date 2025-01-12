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

const pronadiMovie = (req, res, next) => {
    const id_route_param = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === id_route_param);
  
    if (movie) {
      console.log('Film pronađen u middlewareu:', movie);
      req.movie = movie;
      next(); 
    } else {
      res.status(404).json({ message: 'Film nije pronađen' });
    }
  };

export { pronadiMovie };