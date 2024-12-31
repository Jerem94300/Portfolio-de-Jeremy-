


export const Home = () => {

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
  
      // Si on fait défiler vers le bas, cacher le header/footer
      if (currentScrollPosition > lastScrollPosition) {
          hideHeaderFooter();
      } else {
          showHeaderFooter();
      }
  
      // Réinitialiser le timer pour réafficher après une pause
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
          showHeaderFooter();
      }, 500);
  
      lastScrollPosition = currentScrollPosition;
  });
  
  // Événement `wheel` pour PC (optionnel, pour réagir rapidement au scroll avec la molette)
  window.addEventListener('wheel', () => {
      hideHeaderFooter();
  
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
          showHeaderFooter();
      }, 500);
  });
  
  




    return`
       <section class="landing__page">
        <div class="presentation__main">
          <h2 class="title__main">Full-Stack Web & Mobile Developer</h2>
          <h1 class="title__h2">Hi, I am <span class="name__main">Jérémy</span></h1>
          <p class="paragraph__main">Passionate web developer, I create high-performing, custom websites for an optimal user experience.</p>
          <button class="btn__download" onclick="window.location.href='assets/documents/CV.pdf'">Download CV</button>
        </div>
        <div class="photo__accueil">
          <img src="assets/images/Photoroom_20241016_153653.jpeg" alt="Photo de Jérémy" class="photo__item">
        </div>
      </section>
    `;




}