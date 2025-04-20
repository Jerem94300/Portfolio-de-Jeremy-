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
// Vérifier l'existence du conteneur #content
const contentContainer = document.getElementById("content");
if (!contentContainer) {
  console.error("#content introuvable !");
}

loadPageContent("developerProduct", false); // Charge la version anglaise par défaut
// Insérer le footer dans son conteneur
document.getElementById("footer-container").appendChild(Footer());
// Activer le bouton switch langue
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("languageToggle");

  if (toggle) {
    toggle.addEventListener("change", (event) => {
      const isFrench = event.target.checked;
      loadPageContent("developerProduct", isFrench); // Charge la page dans la langue sélectionnée
    });
  }
});
