export const Header = () => {

    return`
      <header class="header">
      <a href="index.html" class="title__link">
        <h1 class="title__h1">Jérémy Abelard</h1>
        </a>
  
    <nav class="nav">
        <ul class="nav__list">
            <li class="list__item">
                <a href="index.html" class="nav__link nav__home" data-page="home">
                    <i class="bi bi-house-door"></i>
                </a>
            </li>
            <li class="list__item">
                <a href="aboutme.html" class="nav__link nav__about" data-page="aboutMe">
                    <i class="bi bi-person"></i>
                </a>
            </li>
            <li class="list__item">
                <a href="experiences.html" class="nav__link nav__experience" data-page="experience">
                    <i class="bi bi-briefcase"></i>
                </a>
            </li>
            <li class="list__item">
                <a href="games.html" class="nav__link nav__games" data-page="games">
                    <i class="bi bi-controller"></i>
                </a>
            </li>
            <li class="list__item">
                <a href="contact.html" class="nav__link nav__contact" data-page="contact">
                    <i class="bi bi-telephone"></i>
                </a>
            </li>
        </ul>
    </nav>
</header>

    
    `

}