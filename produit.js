// Récupérer les éléments du DOM

const imageDuProduit = document.querySelector(".imageDuProduit");
const titreDuProduit = document.querySelector(".titreDuProduit");
const descriptionDuProduit = document.querySelector(".descriptionDuProduit");
const prixDuProduit = document.querySelector(".prixDuProduit");
const listeDesOptions = document.querySelector(".listeDesOptions");
console.log(imageDuProduit);

//récupérer l'ID de la page
// Utiliser QueryString SearchParams
const searchParams = new URLSearchParams(window.location.search);
// Mettre la réponse dans une variable
const searchId = searchParams.get("id");

// Récupérer les données de l'api en fonction du produits (_id)

fetch(`http://localhost:3000/api/cameras/${searchId}`)
  .then((response) => response.json())
  .then((data) => {
    imageDuProduit.src = `${data.imageUrl}`;
    titreDuProduit.innerHTML = `${data.name}`;
    descriptionDuProduit.innerHTML = `${data.description}`;
    prixDuProduit.innerHTML = `${(data.price / 100).toFixed(2)} €`;
    // Je crée une boucle for afin de gérer automatiquement la liste des options
    for (i = 0; i < data.lenses.length; i++) {
      nbOptions = document.createElement("option");
      nbOptions.innerHTML = `${data.lenses[i]}`;
      listeDesOptions.insertAdjacentElement("beforeend", nbOptions);
    }
  });

// selectedIndex & selectedOptions//
// envoi des options du formulaires //
const selectElem = document.querySelector("select");
const buttonPanier = document.querySelector("form button");

buttonPanier.addEventListener("click", (e) => {
  e.preventDefault();
  const index = selectElem.selectedOptions;
  const indexLabel = index[0].label;
  localStorage.setItem("option", indexLabel);
});
