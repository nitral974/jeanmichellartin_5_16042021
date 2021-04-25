// Récupérer les éléments du DOM

const imageDuProduit = document.querySelector(".imageDuProduit");
const titreDuProduit = document.querySelector(".titreDuProduit");
const descriptionDuProduit = document.querySelector(".descriptionDuProduit");
const prixDuProduit = document.querySelector(".prixDuProduit");
const listeDesOptions = document.querySelector(".listeDesOptions");

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
    const produit = {
      id: searchId,
      image: data.imageUrl,
      titre: data.name,
      description: data.description,
      prix: data.price,
      lenses: [data.lenses],
    };

    imageDuProduit.src = produit.image;
    titreDuProduit.innerHTML = produit.titre;
    descriptionDuProduit.innerHTML = produit.description;
    prixDuProduit.innerHTML = `${(produit.prix / 100).toFixed(2)} €`;

    // Je crée une boucle for afin de gérer automatiquement la liste des options
    for (i = 0; i < produit.lenses[0].length; i++) {
      nbOptions = document.createElement("option");
      nbOptions.innerHTML = produit.lenses[0][i];
      listeDesOptions.insertAdjacentElement("beforeend", nbOptions);
    }

    // J'écoute mon évènement option et je l'envoi dans mon produit
    let valeurIndex;
    const monFormulaire = document.querySelector("select");
    monFormulaire.addEventListener("change", () => {
      let index = monFormulaire.selectedOptions;
      valeurIndex = index[0].label;
      produit.choix = valeurIndex;
    });

    const buttonPanier = document.querySelector(".panier");

    buttonPanier.addEventListener("click", (e) => {
      e.preventDefault();
      ajoutProduit(produit);
    });
  });
