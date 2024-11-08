import express from 'express'
import nekretnineRouter from 'nekretnine.js'
const app = express();

app.use(nekretnineRouter);

app.listen(PORT, error => {
    if (error) {
    console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
    console.log(`Server dela na http://localhost:${PORT}`);
    }
    });
