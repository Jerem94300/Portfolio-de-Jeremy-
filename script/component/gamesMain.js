export const Games = () => {

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

       <div class="experience__container fade-in">
        <div class="experience__card" id="military">
        <img src='assets/images/mastermind_thumbnail.png' alt="Image mastemind" class="mastermind__img">
          <button class="btn__download btn__game" onclick="window.location.href='https://mastermind.jeremyabelard.fr/'">Play</button>

        </div>
        <div class="experience__card" id="sudoku">
        <img src='assets/images/image_sudoku.PNG' alt="Image sudoku" class="sudoku__img">
          <button class="btn__download btn__game" onclick="window.location.href='https://sudoku.jeremyabelard.fr/'">Play</button>
        </div>

        
        <div class="experience__card" id="hangman">
        <img src='assets/images/image_hangman.PNG' alt="Image hangman" class="hangman__img">
          <button class="btn__download btn__game" onclick="window.location.href='https://hangman.jeremyabelard.fr/'">Play</button>
        </div>



      </div>
   
   
   `
}