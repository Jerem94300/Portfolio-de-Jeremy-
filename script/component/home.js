export const Home = () => {

    return`
       <section class="landing__page">
        <div class="presentation__main">
          <h2 class="title__main">Full-Stack Web & Mobile Developer</h2>
          <h1 class="title__h2">Hi, I am <span class="name__main">Jérémy</span></h1>
          <p class="paragraph__main">Passionate web developer, I create high-performing, custom websites for an optimal user experience.</p>
          <button class="btn__download" onclick="window.location.href='assets/CV_Jérémy _Abélard.pdf'">Download CV</button>
        </div>
        <div class="photo__accueil">
          <img src="images/Photoroom_20241016_153653.jpeg" alt="Photo de Jérémy" class="photo__item">
        </div>
      </section>
    `;

}