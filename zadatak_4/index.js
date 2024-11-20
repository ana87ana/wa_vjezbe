import express from 'express';
import fs from 'fs/promises';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/zaposlenik", async (req, res) => {
    let pozicija_query = req.query.pozicija;
    let sortiraj_po_godinama = req.query.sortiraj_po_godinama;
    let min_godina = req.query.min_godina;
    let max_godina = req.query.max_godina;
    
    try {
        const data = await fs.readFile('./zaposlenici.json', 'utf8');
        const zaposlenici = JSON.parse(data);

        if (sortiraj_po_godinama) {
            if (sortiraj_po_godinama === 'uzlazno') {
            zaposlenici.sort((a, b) => a.godine_staza - b.godine_staza);
            } else if (sortiraj_po_godinama === 'silazno') {
            zaposlenici.sort((a, b) => b.godine_staza - a.godine_staza);
            }
            return res.status(200).send(zaposlenici);
            };

        if(min_godina){
            const filtered_zaposlenici = zaposlenici.filter(zaposlenik => zaposlenik.godine_staza >= min_godina);
            res.status(200).send(filtered_zaposlenici);
        } else{
            res.status(200).send(zaposlenici);
        };

        if(max_godina){
            const filtered_zaposlenici = zaposlenici.filter(zaposlenik => zaposlenik.godine_staza <= max_godina);
            res.status(200).send(filtered_zaposlenici);
        } else{
            res.status(200).send(zaposlenici);
        };

        if (pozicija_query) {
        const filtered_zaposlenici = zaposlenici.filter(zaposlenik => zaposlenik.pozicija ===
        pozicija_query);
        res.status(200).send(filtered_zaposlenici);
        }
        else {
        res.status(200).send(zaposlenici);
        };

        } catch (error) {
        console.error('Greška prilikom čitanja datoteke:', error);
        res.status(500).send('Greška prilikom čitanja datoteke.');
        }
        });

app.get("/zaposlenik:id", async (req, res) => {
    let query_id = req.query.id;

    if (isNaN(query_id)){
        res.status(400).json({ message: "Prislijedili ste parametar koji nije broj"});
        return;
    };

    try{
        const data = await fs.readFile('./zaposlenici.json', 'utf8');
        const zaposlenik = JSON.parse(data);

        if (query_id) {
            const trazeni_zaposlenik = zaposlenik.filter(zap => zap.id ===
            query.id);
            res.status(200).send(trazeni_zaposlenik);
            }
            else {
            res.status(404).send("Korisnik ne postoji");
            };
    }
    catch (error) {
        console.error('Greška prilikom čitanja datoteke:', error);
        res.status(500).send('Greška prilikom čitanja datoteke.');
        }
});

app.post('/zaposlenici', async (req, res) => {
    const zaposlenik = req.body;

    if (Object.keys(zaposlenik).length === 0) {
    return res.status(400).send('Niste poslali podatke.');
    };

    const kljucevi = Object.keys(zaposlenik);

        if(!(kljucevi.includes("id") && kljucevi.includes("ime") && kljucevi.includes("prezime") && kljucevi.includes("godine_staza") && kljucevi.includes("pozicia"))){
            res.status(400).send('Niste poslali sve potrebne podatke za narudžbu!');
            return; 
        };

    try {
        await fs.writeFile('./zaposlenici.json', JSON.stringify(zaposlenik));
        console.log('Podaci uspješno zapisani u datoteku.');
        res.status(200).send('Podaci uspješno zapisani u datoteku.');
    } catch (error) {
        console.error('Greška prilikom pohrane u datoteku:', error);
        res.status(500).send('Greška prilikom pohrane u datoteku.');
        }
        });

app.listen(PORT, error => {
    if(error){
        console.log(`Doslo je do greske`);
    }else{
        console.log(`Server radi na: http://localhost:${PORT}`);
    }
})