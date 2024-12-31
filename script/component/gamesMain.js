export const Games = () => {

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

       <div class="experience__container fade-in">
        <div class="experience__card" id="military">
        <img src='assets/images/mastermind_thumbnail.png' alt="Image mastemind" class="mastermind__img">
          <button class="btn__download btn__game" onclick="window.location.href='https://jerem94300.github.io/Mastermind/'">Jouer</button>

        </div>
        <div class="experience__card" id="sudoku">
        <img src='assets/images/image_sudoku.PNG' alt="Image sudoku" class="sudoku__img">
          <button class="btn__download btn__game" onclick="window.location.href='https://jerem94300.github.io/Sudoku/'">Jouer</button>
        </div>

        
        <div class="experience__card" id="hangman">
        <img src='assets/images/image_hangman.PNG' alt="Image hangman" class="hangman__img">
          <button class="btn__download btn__game" onclick="window.location.href='https://jerem94300.github.io/Jeu-du-Pendu/'">Jouer</button>
        </div>

        
        <div class="experience__card" id="webdev">
          <h2 class="title">in coming </h2>
          <button class="btn__download" onclick="window.location.href='#'">Télécharger mon CV</button>
        </div>

      
        <div class="experience__card" id="webdev">
          <h2 class="title">in coming</h2>
          <button class="btn__download" onclick="window.location.href='#'">Télécharger mon CV</button>
        </div>





      </div>
   
   
   `
}