const textDisplayNjegaLica = document.getElementById("text-Displey-njega-lica");

function ubaciSadrzajNjegaLica(x) {
    if (x === 1) {
        textDisplayNjegaLica.innerHTML = "Njega lica je važna za održavanje zdrave kože. Redovno čišćenje lica, hidratacija i zaštita od sunca su ključni koraci.";
    } else if (x === 2) {

        const img = document.createElement('img');
        img.src = 'lice.jpg';
        
        img.style.maxWidth = '100%';
        img.style.height = '100%';
        
        textDisplayNjegaLica.innerHTML = '';
        textDisplayNjegaLica.appendChild(img);
    }
}

const textDisplayNegaTela = document.getElementById("text-Displey-nega-tela");

function ubaciSadrzajNegaTela(x) {
    if (x === 1) {
        textDisplayNegaTela.innerHTML = "Nega tela je važna za održavanje zdrave kože i mišića. Redovno čišćenje kože, hidratacija i fizička aktivnost su ključni koraci.";
    } else if (x === 2) {

        const img = document.createElement('img');
        img.src = 'telo.jpg';
    
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    
        
        textDisplayNegaTela.innerHTML = '';
        textDisplayNegaTela.appendChild(img);
    }
}

function proizvodiZaLice() {
    let odgovor = document.getElementById("odgovorZaLice");
    if (odgovor.value.toLowerCase() === "da") {
        alert("Nadamo se da će vam naši proizvodi za negu lica biti od pomoći!");
    } else if (odgovor.value.toLowerCase() === "ne") {
        alert("Imamo širok spektar proizvoda za negu lica, možda bi bilo dobro da ih isprobate!");
    } else {
        alert("Molimo unesite odgovor u obliku 'da' ili 'ne'");
    }
    odgovor.value = "";
};

function prikaziProizvodeZaNegu() {
    let odgovor = document.getElementById("odgovorZaNegu");
    let niz = [];
    niz.length = odgovor.value;
    odgovor.value = "";
    for (let i = 0; i < niz.length; i++) {
        niz[i] = prompt(`Unesite proizvod za negu kojeg ste probali i koji vam se najviše dopao ${i + 1}`);
    }
    let drugo = document.getElementById("drugoPitanjeZaNegu");
    drugo.style.display = "none";
    let listaProizvoda = document.getElementById("listaProizvodaZaNegu");
    listaProizvoda.style.display = "flex";
    listaProizvoda.style.color = "white";
    listaProizvoda.style.fontSize = "18px";
    listaProizvoda.style.textAlign = "center";
    listaProizvoda.innerHTML = `Proizvodi za negu koji vam se najviše dopadaju:<br><br>${niz}`;
}

 let ime=f.ime;
   let prezime=f.prezime;
   let email=f.email;
   let lozinka=f.lozinka;
   

   function potvrdiFormu(event){
    event.preventDefault();
    console.log("ime"+ime.value);
    console.log("prezime"+prezime.value);
    console.log("email"+email.value);
    console.log("lozinka"+lozinka.value);
   
   }

   function promenaProizvodaZaNegu() {
    let blok = document.getElementById("proizvodiZaNegu");
    blok.style.backgroundColor = "#aecaa9";
    blok.style.color = "white";
    blok.style.border = "2px solid black";
    blok.style.padding = "10px";
    blok.style.borderRadius = "5px";
    blok.style.textAlign="center";

    let tekst = document.getElementById("tekstProizvodaZaNegu");
    tekst.innerHTML = "Ovdje su naši najpopularniji proizvodi za njegu!";
}

function promenaKozmetickihProizvoda() {
    let blok = document.getElementById("kozmetickiProizvodi");
    blok.style.backgroundColor = "pink";
    blok.style.color = "black";
    blok.style.border = "2px solid black";
    blok.style.padding = "10px";
    blok.style.borderRadius = "5px";
    blok.style.textAlign="center";

    let tekst = document.getElementById("tekstKozmetickihProizvoda");
    tekst.innerHTML = "Isprobajte naše najnovije kozmetičke proizvode i otkrijte svoju ljepotu!";
}

function promieniStilKozmetickogSalona() {
    let blok = document.getElementById("kozmetickiSalon");
    blok.style.backgroundColor = "lightblue";
    blok.style.color = "black";
    blok.style.border = "2px solid black";
    blok.style.padding = "10px";
    blok.style.borderRadius = "5px";
blok.style.textAlign="center";

    let tekst = document.getElementById("tekstKozmetickogSalona");
    tekst.innerHTML = "Posjetite naš kozmetički salon i osjećajte se svježe i prekrasno!";
}