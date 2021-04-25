function recuperationPanier() {
  const produitPanier = localStorage.getItem("panier");
  if (produitPanier == null) {
    return [];
  } else {
    return JSON.parse(produitPanier);
  }
}

function ajoutProduit(produit) {
  let panier = recuperationPanier();
  let produitExistant = panier.find((p) => p.id == produit.id);

  if (produitExistant == undefined) {
    produit.quantite = 1;
    panier.push(produit);
  } else {
    produitExistant.quantite++;
  }

  enregisterPanier(panier);
}

function enregisterPanier(panier) {
  localStorage.setItem("panier", JSON.stringify(panier));
}

// script gestionPanier a ajouté dans produitd html
// au click appel de la fonction ajout de produit.
// ajouter une fonction calcul du total dans gestionPanier.js
// fonction supprimer voir filter pour les tableaux
