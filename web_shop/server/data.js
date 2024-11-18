class Proizvod{
    constructor(id, naziv, cijena, velicine, slike, opis){
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
        this.slike = slike;
        this.opis = opis;
    }
}

const proizvodi = [
    new Proizvod(1, 'Obična majica', 100, ['XS', 'S', 'M', 'L'], [<img src="https://impotusa.com/12474-large_default/crna-trkacka-majica-kratkih-rukava.jpg"></img>, <img src="https://promodar.hr/wp-content/uploads/2020/06/ap741063-01-xxl_s1msyw71.png"></img>], "Obična majica"),
    new Proizvod(2, "Levi's 501 traperice", 110, ['S', 'M', 'L'], [<img src="https://lsco.scene7.com/is/image/lsco/A19590005-back-pdp-ld?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=1840"></img>], 'traperice'),
    new Proizvod(3, 'Zimska kapa', 40, 'onesize', [<img src="https://vp.lacuna.hr/wand/Content/slike/5kzwts.jpg?width=700&height=700&scale=both&mode=pad"></img>], 'zimska kapa'),
    new Proizvod(4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42'], [<img src="https://www.sportvision.hr/files/images/slike_proizvoda/media/DZ9/DZ9393/images/DZ9393.jpg"></img>], 'carape adidas'),
    new Proizvod(5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'], [<img src="https://www.sportvision.hr/files/thumbs/files/images/slike_proizvoda/media/DM0/DM0113-100/images/thumbs_800/DM0113-100_800_800px.jpg.webp"></img>], "nike patike")
  ];

  export { Proizvod, proizvodi };