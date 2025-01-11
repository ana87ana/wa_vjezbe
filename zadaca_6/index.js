import express from 'express'
import actorsRouter from './routes/actors.js'
import moviesRouter from './routes/movies.js'

const app = express();

const za_svaki_zahtjev = (req, res, next) => {
    console.log(`Trenutno vrijeme: ${new Date().toLocaleString()}`);
    next();
};

app.use(express.json());
app.use(za_svaki_zahtjev);
app.use("/actors", actorsRouter);
app.use("/movies", moviesRouter);


let PORT = 3000;
app.listen(PORT, error => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Poslužitelj radi na http://localhost:${PORT}`);
}
});