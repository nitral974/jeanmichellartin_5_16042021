// Récupérer les éléments du DOM pour l'affichage des cartes produits

const cardsProducts = document.querySelector(".cardsProducts");

// Récupérer URL
const searchUrl = window.location;

// Récuperer les données de l'API en utilisant la méthode fetch

fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((data) => {
    // Créer une boucle for afin d'afficher automatiquement la liste des produits
    for (const dataProducts of data) {
      cardsProducts.innerHTML += `
    <a class="col-4 mt-5" href="produit.html?id=${dataProducts._id}">
        <div class="card border-dark bg-dark">
            <img
            src="${dataProducts.imageUrl}"
            class="card-img-top"
            alt="..."
            />
            <div class="card-body text-white">
                <h5 class="card-title">${dataProducts.name}</h5>
                <p class="card-text">
                ${dataProducts.description}
                </p>
                <p class="card-text text-end fw-bold fs-5">${(
                  dataProducts.price / 100
                ).toFixed(2)} €</p>
            </div>
        </div>
    </a>`;
    }
  });
