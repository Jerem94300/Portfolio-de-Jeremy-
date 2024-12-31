export const ExpDev = (data) => {

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
  

  console.log(data);
  console.log(data[0].src);
  


    return `
    <div class="experience__container fade-in">
    <div class="icones">
        <img src="/assets/images/html.png" alt="" class="icone" />
      </div>
      `


}



