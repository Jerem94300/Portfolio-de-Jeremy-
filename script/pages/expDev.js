import { getIcones } from "/utils/api.js";
import { Header } from "../component/header.js";
import { ExpDev } from "../component/expDevMain.js";
import { Footer } from "../component/footer.js";

const displayData = (data) => {
  const body = document.querySelector("body");

  // Insérer le Header
  const header = Header();
  body.appendChild(header);

  // Insérer le contenu principal
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = ExpDev(data); // Contenu principal
  body.appendChild(container);

  // Insérer le Footer
  const footer = Footer();
  body.appendChild(footer);
};

(async () => {
  const data = await getIcones(); // Récupération des icônes
  displayData(data); // Afficher les données
})();
