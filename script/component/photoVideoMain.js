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
  section.className = "photo-video about-me";
  section.id = "photo-video-content";

  section.innerHTML = `
        <h2 class="about-me__title">Event Photo & Video Services</h2>
        <p class="about-me__subtitle">Unforgettable memories for your most precious moments</p>
        <div class="card-container">
            <!-- Wedding -->
            <div class="card">
                <div class="card__front">
                    <img src="assets/images/montage_mariage1.png" alt="Wedding montage" class="card__image">
                    <p class="card__title">Weddings</p>
                </div>
                <div class="card__back">
                    <p class="card__content">Elegant and emotional montages of your most beautiful moments: preparations, ceremony, evening.</p>
                </div>
            </div>
            <!-- Birthdays -->
            <div class="card">
                <div class="card__front">
                    <img src="assets/images/montage_photo2.png" alt="Birthday montage" class="card__image">
                    <p class="card__title">Birthdays</p>
                </div>
                <div class="card__back">
                    <p class="card__content">A dynamic and festive montage to relive your birthdays with family or friends.</p>
                </div>
            </div>
            <!-- Custom -->
            <div class="card">
                <div class="card__front">
                    <img src="assets/images/montage_photo1.png" alt="Custom montage" class="card__image">
                    <p class="card__title">Custom</p>
                </div>
                <div class="card__back">
                    <p class="card__content">Want a unique montage? Let's create a project together that reflects your vision (thank you videos, retrospectives...)</p>
                </div>
            </div>
        </div>

        <div class="buttons-container">
            <button class="btn__contact" onclick="window.location.href='contact.php'">Request a Quote</button>
            <button class="btn__back" onclick="window.location.href='index.html'">Back</button>
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
