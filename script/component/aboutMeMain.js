export const AboutMe = () => {

    return`
     <section class="about-me">
  <h2 class="about-me__title">About Me</h2>
  <div class="card-container">
    <!-- Card: Date of Birth -->
    <div class="card">
      <div class="card__front">
        <img src="images/image_birth.webp" alt="Date of Birth" class="card__image">
        <p class="card__title">Date of Birth</p>
      </div>
      <div class="card__back">
        <p class="card__content">December 05, 1982</p>
      </div>
    </div>
    <!-- Card: Driving License and Languages -->
    <div class="card">
      <div class="card__front">
        <img src="images/image_permis2.webp" alt="Driving License and Languages" class="card__image">
        <p class="card__title">Driving License & Languages</p>
      </div>
      <div class="card__back">
        <p class="card__content">Driving License B, C<br>English (B2), Spanish (B2)</p>
      </div>
    </div>
    <!-- Card: Software Skills -->
    <div class="card">
      <div class="card__front">
        <img src="images/dev_img.webp" alt="Software Skills" class="card__image">
        <p class="card__title">Software</p>
      </div>
      <div class="card__back">
        <p class="card__content">Word, Excel, PowerPoint</p>
      </div>
    </div>
    <!-- Card: Hobbies -->
    <div class="card">
      <div class="card__front">
        <img src="images/image_hobbies.webp" alt="Hobbies" class="card__image">
        <p class="card__title">Hobbies</p>
      </div>
      <div class="card__back">
        <p class="card__content">Hiking, Swimming, Trail Running, Video Games</p>
      </div>
    </div>
  </div>
  <!-- Central Buttons -->
  <div class="buttons-container">
     <button class="btn__download" onclick="window.location.href='assets/documents/CV.pdf'">Download CV</button>
    <button class="btn__back" onclick="window.location.href='index.html'">Back</button>
  </div>
</section>
    
    
    
    
    
    
    `



}