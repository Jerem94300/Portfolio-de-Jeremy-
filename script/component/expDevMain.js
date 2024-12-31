export const ExpDev = (data) => {
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
    

  console.log(data);
  console.log(data[0].src);

  let iconesGrid = '';

  data.forEach((icone) => {
    console.log(icone.src);
    iconesGrid += `
    <div class="icones">
        <img src="assets/${icone.src}" alt="" class="icone" />
      </div>
    `
  });



  


    return `
     <main id="content" class="main">
    <div class="experience__container fade-in">
    ${iconesGrid}

    
    </div>
    <div class="block__right">
        <div class="containerExp__title">My Projects</div>

    <div class="card__container">

        <div class="experience__card fisheye__card" id="military"   onclick="window.location.href='https://jerem94300.github.io/Fisheye/'">
        <img src="assets/images/fisheye.webp" alt="Logo Fisheye" class="fisheye__logo">
  
        </div>
        <div class="experience__card" id="webdev"  onclick="window.location.href='expDev.html'">
          <h2 class="title">Web Developer</h2>
        </div>
          <div class="experience__card" id="military"   onclick="window.location.href='#'">
  
          <h2 class="title">Military Experience</h2>
        </div>
        <div class="experience__card" id="webdev"  onclick="window.location.href='expDev.html'">
          <h2 class="title">Web Developer</h2>
        </div>
          <div class="experience__card" id="military"   onclick="window.location.href='#'">
  
          <h2 class="title">Military Experience</h2>
        </div>
        <div class="experience__card" id="webdev"  onclick="window.location.href='expDev.html'">
          <h2 class="title">Web Developer</h2>
        </div>
    </div>

    </div>
      
      
     </main>

    
      `


}



