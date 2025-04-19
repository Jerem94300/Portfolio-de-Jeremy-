export const Home = () => {
  console.log("Fonction Home (FR) appelée.");
  const section = document.createElement("section");
  section.className = "landing__page";

  section.innerHTML = `
      <div class="presentation__main">
        <h2 class="title__main">Développeur Full-Stack Web & Mobile</h2>
        <h1 class="title__h2">Bonjour, je suis <span class="name__main">Jérémy</span></h1>
        <p class="paragraph__main">Développeur web passionné, je crée des sites web performants et sur mesure pour une expérience utilisateur optimale.</p>
        <button class="btn__download">Télécharger le CV</button>
      </div>
      <div class="photo__accueil">
        <img src="assets/images/Photoroom_20241016_153653.jpeg" alt="Photo de Jérémy" class="photo__item">
      </div>
    `;

  const hideHeaderFooter = () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.opacity = "0";
    if (footer) footer.style.opacity = "0";
  };

  const showHeaderFooter = () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.opacity = "1";
    if (footer) footer.style.opacity = "1";
  };

  let lastScrollPosition = 0;
  let wheelTimeout;

  const onScroll = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > lastScrollPosition) {
      hideHeaderFooter();
    } else {
      showHeaderFooter();
    }

    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(showHeaderFooter, 500);
    lastScrollPosition = currentScrollPosition;
  };

  const onWheel = () => {
    hideHeaderFooter();
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(showHeaderFooter, 500);
  };

  window.addEventListener("scroll", onScroll);
  window.addEventListener("wheel", onWheel);

  section.querySelector(".btn__download").addEventListener("click", () => {
    window.location.href = "assets/documents/CV.pdf";
  });

  return section;
};

export default Home;
