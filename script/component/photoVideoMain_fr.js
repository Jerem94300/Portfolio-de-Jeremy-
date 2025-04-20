export const photoVideo = () => {
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
  section.className = "photo-video about-me"; // Ajout de "about-me" ici
  section.id = "photo-video-content";

  section.innerHTML = `
        <h2 class="about-me__title">Services Photo & Vidéo Événementiels</h2>
        <p class="about-me__subtitle">Des souvenirs inoubliables pour vos moments les plus précieux</p>
        <div class="card-container">
          <!-- Mariage -->
          <div class="card">
            <div class="card__front">
              <img src="assets/images/montage_mariage1.png" alt="Montage mariage" class="card__image">
              <p class="card__title">Mariages</p>
            </div>
            <div class="card__back">
              <p class="card__content">Montages élégants et émotionnels de vos plus beaux instants : préparatifs, cérémonie, soirée.</p>
            </div>
          </div>
          <!-- Anniversaires -->
          <div class="card">
            <div class="card__front">
              <img src="assets/images/montage_photo2.png" alt="Montage anniversaire" class="card__image">
              <p class="card__title">Anniversaires</p>
            </div>
            <div class="card__back">
              <p class="card__content">Un montage dynamique et festif pour revivre vos anniversaires en famille ou entre amis.</p>
            </div>
          </div>
          <!-- Personnalisé -->
          <div class="card">
            <div class="card__front">
              <img src="assets/images/montage_photo1.png" alt="Montage personnalisé" class="card__image">
              <p class="card__title">Personnalisé</p>
            </div>
            <div class="card__back">
              <p class="card__content">Envie d’un montage unique ? Créons ensemble un projet à votre image (remerciements, rétrospectives...)</p>
            </div>
          </div>
        </div>
    
        <div class="buttons-container">
          <button class="btn__contact" onclick="window.location.href='contact.php'">Demander un devis</button>
          <button class="btn__back" onclick="window.location.href='index.html'">Retour</button>
        </div>
      `;

  // Ajout de l'animation des cartes au scroll
  const revealCardsOnScroll = () => {
    const cards = section.querySelectorAll(".card");

    const reveal = () => {
      const triggerBottom = window.innerHeight * 0.85;
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Exécuter immédiatement
  };

  // Lancer l'animation un petit peu après ajout au DOM
  setTimeout(revealCardsOnScroll, 100);

  return section;
};
