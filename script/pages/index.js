import { Header } from "../component/header.js";
import { loadPageContent } from "../component/languageManager.js";
import { Footer } from "../component/footer.js";

// Préparer le layout de base
document.body.innerHTML = `
  <div class="container">
    <div id="header-container"></div>
    <div id="content"></div>
    <div id="footer-container"></div>
  </div>
`;

// Insérer le header dans son conteneur
document.getElementById("header-container").appendChild(Header());

// Charger la page d’accueil (EN par défaut)
loadPageContent("home", false)
  .then(() => {
    console.log("Page d'accueil chargée avec succès.");
  })
  .catch((error) => {
    console.error("Erreur lors du chargement de la page d'accueil :", error);
  });

// Insérer le footer dans son conteneur
document.getElementById("footer-container").appendChild(Footer());

// Activer le bouton switch langue
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("languageToggle");

  if (toggle) {
    toggle.addEventListener("change", (event) => {
      const isFrench = event.target.checked;
      const page =
        document.querySelector(".nav__link.active")?.dataset.page || "home";
      loadPageContent(page, isFrench);
    });
  }
});
