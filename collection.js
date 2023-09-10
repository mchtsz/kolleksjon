const ErrorText = document.getElementById("ErrorText");
const InfoText = document.getElementById("InfoText");
const form = document.getElementById("form");

// lager en tom liste som vi kan legge til kunder i
let kundeListe = [];

// her lager vi en funksjon som formaterer dataen vi får fra formen
function formatFormData(formData, ...args) {
  const data = {};

  for (let key of args) {
    data[key] = formData.get(key);
  }

  return data;
}

// her lager vi en funksjon som returnerer en error melding
function returnErr(message) {
  ErrorText.innerText = message;
  return false;
}

// her lager vi en eventlistener som lytter etter når formen blir submittet
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = formatFormData(
    formData,
    "fornavn",
    "etternavn",
    "adresse",
    "postnummer",
    "poststed",
    "telefon",
    "passord"
  );

  // console.log(data);


  // her sjekker vi om passordet er gyldig
  let hasUpperCase = /[A-Z]/.test(data.passord);
  let hasLowerCase = /[a-z]/.test(data.passord);
  let hasNumber = /\d/.test(data.passord);
  let hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(
    data.passord
  );

  // her bruker vi variablene ovenfor i en if statment og sjekker om passordet er gyldig
  if (data.passord.length < 10) {
    return returnErr("Passordet må være minst 10 tegn langt");
  } else if (!hasUpperCase && hasLowerCase) {
    return returnErr("Passordet må ha minst en stor og en liten bokstav!");
  } else if (!hasNumber) {
    return returnErr("Passordet må ha minst et tall!");
  } else if (!hasSpecialCharacter) {
    return returnErr("Passordet må ha minst et spesialtegn!");
  } else {
    kundeListe.push(data);
    console.log(kundeListe);
    InfoText.innerText = `Du heter ${data.fornavn} ${data.etternavn} og bor i ${data.adresse}, ${data.postnummer} ${data.poststed}. Telefonnummeret ditt er ${data.telefon}. Vi har solgt alle personopplysningene dine til facebook. Ha en fin dag!`;
    returnErr("");
  }
});