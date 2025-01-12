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

const pronadiActor = (req, res, next) => {
    const id_route_param = parseInt(req.params.id);
    const actor = actors.find(actor => actor.id === id_route_param);
  
    if (actor) {
      console.log('Glumac pronađen u middlewareu:', actor);
      req.actor = actor;
      next(); 
    } else {
      res.status(404).json({ message: 'Glumac nije pronađen' });
    }
  };

export { pronadiActor };