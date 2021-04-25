const sectionPanier = document.querySelector(".sectionPanier");

const monPanier = JSON.parse(localStorage.getItem("panier"));

for (let lePanier of monPanier) {
  sectionPanier.innerHTML += `
  <div class="card mb-3 border-dark bg-dark text-white">
  <div class="row g-0">
    <div class="col-2">
      <img
        src="${lePanier.image}"
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
          ${lePanier.description}
      </p>
      <p class="card-text text-danger fw-bold fs-4">
      ${lePanier.prix} €
  </p>
      </div>
      <p class="card-text text-success">
          En Stock
      </p>
        <p class="card-title">${lePanier.titre}</p>
        <p class="card-text">
          ${lePanier.choix}
      </p>
      <hr>

      </div>
    </div>
  </div>
  </div>
  `;
}
