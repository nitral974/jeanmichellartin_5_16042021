const sectionPanier = document.querySelector(".sectionPanier");

const produitPanier = JSON.parse(localStorage.getItem("produitsPanier"));

const produits = {
  imgPanier: produitPanier.image,
  titrePanier: produitPanier.titre,
  descriptionPanier: produitPanier.description,
  option: localStorage.getItem("option"),
  prixPanier: (produitPanier.prix / 100).toFixed(2),
};

// console.log(produits);

sectionPanier.innerHTML += `
<div class="card mb-3 border-dark bg-dark text-white">
<div class="row g-0">
  <div class="col-2">
    <img
      src="${produits.imgPanier}"
      alt="..."
      class="img-fluid"
    />
  </div>
  <div class="col">
    <div class="card-body">
    <h1 class="fs-5">VOTRE PANIER</h1>
    <hr>
    <div class="d-flex justify-content-between">
    
    <p class="card-text">
        ${produits.descriptionPanier}
    </p>
    <p class="card-text text-danger fw-bold fs-4">
    ${produits.prixPanier} €
</p>
    </div>
    <p class="card-text text-success">
        En Stock    
    </p>
      <p class="card-title">${produits.titrePanier}</p>
      <p class="card-text">
        ${produits.option}
    </p>
    <hr>
    
    </div>
  </div>
</div>
</div>
`;
