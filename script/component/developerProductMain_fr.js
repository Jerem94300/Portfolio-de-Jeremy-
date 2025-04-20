export const developerProduct = () => {
  let wheelTimeout;
  let lastScrollPosition = 0;

  const hideHeaderFooter = () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    header.style.opacity = "0";
    footer.style.opacity = "0";
  };

  const showHeaderFooter = () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    header.style.opacity = "1";
    footer.style.opacity = "1";
  };

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      hideHeaderFooter();
    } else {
      showHeaderFooter();
    }

    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      showHeaderFooter();
    }, 500);

    lastScrollPosition = currentScrollPosition;
  });

  window.addEventListener("wheel", () => {
    hideHeaderFooter();

    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      showHeaderFooter();
    }, 500);
  });

  const trackDownloadCV = () => {
    const downloadBtn = document.querySelector(".btn__download");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", function () {
        gtag("event", "download_cv", {
          event_category: "engagement",
          event_label: "Téléchargement CV",
          value: 1,
        });
      });
    }
  };

  trackDownloadCV();

  const section = document.createElement("section");
  section.classList.add("developer-product", "about-me");
  section.id = "developer-product";
  section.innerHTML = `
      <h2 class="about-me__title">Mes services</h2>
  
      <div class="developer-product__container">
        <div class="developer-product__container__content">
          <div class="card-container">
            <div class="card">
              <div class="card__front">
                <img src="assets/images/image_le_lys_dor.png" alt="Site vitrine" class="card__image" />
                <h3 class="card__title">Site vitrine</h3>
              </div>
              <div class="card__back">
                <div class="card__content">
                  Présentez votre activité avec un site moderne et responsive.
                </div>
              </div>
            </div>
  
            <div class="card">
              <div class="card__front">
                <img src="assets/images/image_techHouse.png" alt="E-commerce" class="card__image" />
                <h3 class="card__title">E-commerce</h3>
              </div>
              <div class="card__back">
                <div class="card__content">
                  Vendez facilement vos produits avec une boutique performante.
                </div>
              </div>
            </div>
  
            <div class="card">
              <div class="card__front">
                <img src="assets/images/image_maintenance.JPG" alt="Maintenance" class="card__image" />
                <h3 class="card__title">Maintenance</h3>
              </div>
              <div class="card__back">
                <div class="card__content">
                  Je veille à la sécurité, aux mises à jour et aux sauvegardes.
                </div>
              </div>
            </div>
  
            <div class="card">
              <div class="card__front">
                <img src="assets/images/shopify.PNG" alt="Site via CMS" class="card__image" />
                <h3 class="card__title">Site via CMS</h3>
              </div>
              <div class="card__back">
                <div class="card__content">
                  Solution rapide et économique avec Shopify ou autre CMS personnalisé. (Moins personnalisable)
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="advantages-list">
          <ul>
            <li><strong>Design sur-mesure :</strong> adapté à votre image de marque</li>
            <li><strong>Référencement naturel :</strong> visibilité optimisée</li>
            <li><strong>Support continu :</strong> je vous accompagne même après livraison</li>
            <li><strong>Techniques modernes :</strong> sécurité, rapidité et performance</li>
          </ul>
        </div>
  
        <div class="buttons-container">
          <button class="btn__contact" onclick="window.location.href='contact.php'">Demande de devis</button>
          <button class="btn__back" onclick="window.location.href='index.html'">Retour</button>
        </div>
      </div>
    `;

  return section;
};
