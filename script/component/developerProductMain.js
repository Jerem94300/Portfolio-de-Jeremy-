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
    <h2 class="about-me__title">My Services</h2>

    <div class="developer-product__container">
      <div class="developer-product__container__content">
        <div class="card-container">
          <div class="card">
            <div class="card__front">
              <img src="assets/images/image_le_lys_dor.png" alt="Showcase Website" class="card__image" />
              <h3 class="card__title">Showcase Website</h3>
            </div>
            <div class="card__back">
              <div class="card__content">
                Present your business with a modern and responsive website.
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
                Easily sell your products with a high-performing store.
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
                I ensure security, updates, and backups.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card__front">
              <img src="assets/images/shopify.PNG" alt="CMS Website" class="card__image" />
              <h3 class="card__title">CMS Website</h3>
            </div>
            <div class="card__back">
              <div class="card__content">
                Quick and economical solution with Shopify or other custom CMS. (Less customizable)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="advantages-list">
        <ul>
          <li><strong>Custom Design:</strong> tailored to your brand image</li>
          <li><strong>SEO:</strong> optimized visibility</li>
          <li><strong>Continuous Support:</strong> I assist you even after delivery</li>
          <li><strong>Modern Techniques:</strong> security, speed, and performance</li>
        </ul>
      </div>

      <div class="buttons-container">
        <button class="btn__contact" onclick="window.location.href='contact.php'">Request a Quote</button>
        <button class="btn__back" onclick="window.location.href='index.html'">Back</button>
      </div>
    </div>
  `;

  return section;
};
