export const AboutMe = () => {
  let wheelTimeout;
  let lastScrollPosition = 0;

  // Fonction pour cacher le header et le footer
  const hideHeaderFooter = () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    header.style.opacity = "0";
    footer.style.opacity = "0";
  };

  // Fonction pour réafficher le header et le footer
  const showHeaderFooter = () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    header.style.opacity = "1";
    footer.style.opacity = "1";
  };

  // Événement `scroll` pour mobile et PC
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

  // Événement `wheel` pour PC
  window.addEventListener("wheel", () => {
    hideHeaderFooter();

    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      showHeaderFooter();
    }, 500);
  });

  // Fonction pour suivre le téléchargement du CV
  const trackDownloadCV = () => {
    const downloadBtn = document.querySelector(".btn__download");

    if (downloadBtn) {
      downloadBtn.addEventListener("click", function (event) {
        // Envoyer l'événement à Google Analytics
        gtag("event", "download_cv", {
          event_category: "engagement",
          event_label: "Téléchargement CV",
          value: 1,
        });
      });
    }
  };

  // Appeler la fonction de tracking
  trackDownloadCV();

  const section = document.createElement("section");
  section.className = "about-me";
  section.id = "about-me-content"; // Ajout d'un ID unique pour la section

  section.innerHTML = `
    <section class="about-me">
      <h2 class="about-me__title">À propos de moi</h2>
      <div class="card-container">
        <!-- Carte : Date de naissance -->
        <div class="card">
          <div class="card__front">
            <img src="assets/images/image_birth.webp" alt="Date de naissance" class="card__image">
            <p class="card__title">Date de naissance</p>
          </div>
          <div class="card__back">
            <p class="card__content">05 décembre 1982</p>
          </div>
        </div>
        <!-- Carte : Permis de conduire et langues -->
        <div class="card">
          <div class="card__front">
            <img src="assets/images/image_permis2.webp" alt="Permis de conduire et langues" class="card__image">
            <p class="card__title">Permis de conduire & Langues</p>
          </div>
          <div class="card__back">
            <p class="card__content">Permis B, C<br>Anglais (B2), Espagnol (B2)</p>
          </div>
        </div>
        <!-- Carte : Compétences logicielles -->
        <div class="card">
          <div class="card__front">
            <img src="assets/images/dev_img.webp" alt="Compétences logicielles" class="card__image">
            <p class="card__title">Logiciels</p>
          </div>
          <div class="card__back">
            <p class="card__content">Word, Excel, PowerPoint</p>
          </div>
        </div>
        <!-- Carte : Loisirs -->
        <div class="card">
          <div class="card__front">
            <img src="assets/images/image_hobbies.webp" alt="Loisirs" class="card__image">
            <p class="card__title">Loisirs</p>
          </div>
          <div class="card__back">
            <p class="card__content">Randonnée, Natation, Trail, Jeux vidéo</p>
          </div>
        </div>
      </div>
      <!-- Boutons centraux -->
      <div class="buttons-container">
         <button class="btn__download" id="download-cv">Télécharger le CV</button>
         <button class="btn__back" onclick="window.location.href='index.html'">Retour</button>
      </div>
    </section>
  `;

  return section;
};
