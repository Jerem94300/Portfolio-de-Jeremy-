


export const Home = () => {

  let wheelTimeout;

  const hideHeaderFooter = () => {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
  
      // Masquer le header et le footer
      header.style.opacity = '0';
      footer.style.opacity = '0';
      header.style.transition = 'opacity 0.3s ease';
      footer.style.transition = 'opacity 0.3s ease';
  };
  
  const showHeaderFooter = () => {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
  
      // Réafficher le header et le footer
      header.style.opacity = '1';
      footer.style.opacity = '1';
  };
  
  window.addEventListener('wheel', () => {
      // Cacher header/footer au mouvement de la molette
      hideHeaderFooter();
  
      // Réinitialiser le timer pour réafficher header/footer
      clearTimeout(wheelTimeout);
  
      // Définir un nouveau timer pour réafficher après 500 ms d'inactivité
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