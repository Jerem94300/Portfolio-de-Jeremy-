export const AboutMe = () => {
  let wheelTimeout;
  let lastScrollPosition = 0;

  // Fonction pour cacher le header et le footer
  const hideHeaderFooter = () => {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      header.style.opacity = '0';
      footer.style.opacity = '0';
  };

  // Fonction pour réafficher le header et le footer
  const showHeaderFooter = () => {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      header.style.opacity = '1';
      footer.style.opacity = '1';
  };

  // Événement `scroll` pour mobile et PC
  window.addEventListener('scroll', () => {
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
  window.addEventListener('wheel', () => {
      hideHeaderFooter();

      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
          showHeaderFooter();
      }, 500);
  });

  // Fonction pour suivre le téléchargement du CV
  const trackDownloadCV = () => {
      const downloadBtn = document.querySelector('.btn__download');

      if (downloadBtn) {
          downloadBtn.addEventListener('click', function(event) {
              // Envoyer l'événement à Google Analytics
              gtag('event', 'download_cv', {
                  event_category: 'engagement',
                  event_label: 'Téléchargement CV',
                  value: 1
              });
          });
      }
  };

  // Appeler la fonction de tracking
  trackDownloadCV();

  return `
    <section class="about-me">
      <h2 class="about-me__title">About Me</h2>
      <div class="card-container">
        <!-- Card: Date of Birth -->
        <div class="card">
          <div class="card__front">
            <img src="assets/images/image_birth.webp" alt="Date of Birth" class="card__image">
            <p class="card__title">Date of Birth</p>
          </div>
          <div class="card__back">
            <p class="card__content">December 05, 1982</p>
          </div>
        </div>
        <!-- Card: Driving License and Languages -->
        <div class="card">
          <div class="card__front">
            <img src="assets/images/image_permis2.webp" alt="Driving License and Languages" class="card__image">
            <p class="card__title">Driving License & Languages</p>
          </div>
          <div class="card__back">
            <p class="card__content">Driving License B, C<br>English (B2), Spanish (B2)</p>
          </div>
        </div>
        <!-- Card: Software Skills -->
        <div class="card">
          <div class="card__front">
            <img src="assets/images/dev_img.webp" alt="Software Skills" class="card__image">
            <p class="card__title">Software</p>
          </div>
          <div class="card__back">
            <p class="card__content">Word, Excel, PowerPoint</p>
          </div>
        </div>
        <!-- Card: Hobbies -->
        <div class="card">
          <div class="card__front">
            <img src="assets/images/image_hobbies.webp" alt="Hobbies" class="card__image">
            <p class="card__title">Hobbies</p>
          </div>
          <div class="card__back">
            <p class="card__content">Hiking, Swimming, Trail Running, Video Games</p>
          </div>
        </div>
      </div>
      <!-- Central Buttons -->
      <div class="buttons-container">
         <button class="btn__download" id="download-cv">Download CV</button>
         <button class="btn__back" onclick="window.location.href='index.html'">Back</button>
      </div>
    </section>
  `;
};
