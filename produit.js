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
    //créer un objet produit en cours
    const produit1 = {
      id: searchId,
      image: data.imageUrl,
      titre: data.name,
      description: data.description,
      prix: data.price,
      lenses: [data.lenses],
    };

    imageDuProduit.src = produit1.image;
    titreDuProduit.innerHTML = produit1.titre;
    descriptionDuProduit.innerHTML = produit1.description;
    prixDuProduit.innerHTML = `${(produit1.prix / 100).toFixed(2)} €`;
    // Je crée une boucle for afin de gérer automatiquement la liste des options
    for (i = 0; i < produit1.lenses[0].length; i++) {
      nbOptions = document.createElement("option");
      nbOptions.innerHTML = produit1.lenses[0][i];
      listeDesOptions.insertAdjacentElement("beforeend", nbOptions);
    }

    // ENVOI INFORMATION LOCALSTORAGE

    const selectElem = document.querySelector("select");
    const buttonPanier = document.querySelector("form button");

    buttonPanier.addEventListener("click", () => {
      const index = selectElem.selectedOptions;
      const indexLabel = index[0].label;
      localStorage.setItem(`produitsPanier`, JSON.stringify(produit1));
      localStorage.setItem("option", indexLabel);
    });
  });
