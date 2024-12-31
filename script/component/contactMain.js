export const Contact = () => {

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
    
    

    return `
    <div class="contact__container">
      
      <form action="" class="form">
        <div class="form__group">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" required class="form__control">
        </div>
        <div class="form__group">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" required class="form__control">
        </div>
        <div class="form__group">
            <label for="email">Email</label>
            <input type="email" name="email" required class="form__control">
        </div>
        <div class="form__group">
            <label for="message">Your Message</label>
            <textarea name="message" id="textarea" class="form__control"></textarea>
        </div>
        <div class="button__send">
        <a href="#" class="link__send">Send</a>
        </div>
    
        </form>
    </div>
    
    
    
    
    
    
    
    `












}