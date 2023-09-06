const fornavn = document.getElementById("fornavn");
const etternavn = document.getElementById("etternavn");
const adresse = document.getElementById("adresse");

const postnr = document.getElementById("postnummer");
const poststed = document.getElementById("poststed");
const telefon = document.getElementById("telefon");
const submitBtn = document.getElementById("submit");

const infoText = document.getElementById("infoText");

let kundeListe = [{}];

submitBtn.addEventListener("click", () => {
  const kunde = {
    fornavn: fornavn.value,
    etternavn: etternavn.value,
    adresse: adresse.value,
    postnr: postnr.value,
    poststed: poststed.value,
    telefon: telefon.value,
  };

  kundeListe.push(kunde);
  console.log(kundeListe);

  infoText.innerText = "Kunde lagt til";
});
