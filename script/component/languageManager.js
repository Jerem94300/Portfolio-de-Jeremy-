const BASE_PATH = "../component/"; // Corrigez le chemin si les fichiers sont dans un autre répertoire

export const loadPageContent = async (page, isFrench) => {
  const langSuffix = isFrench ? "_fr" : "";
  const fileName = `${page}Main${langSuffix}.js`; // Ajout de "Main" pour correspondre au fichier existant
  const filePath = `${BASE_PATH}${fileName}`; // Utilisation de la base configurable

  console.log(`Chemin complet du fichier : ${filePath}`); // Log pour déboguer

  try {
    console.log(`Tentative de chargement du fichier : ${filePath}`);
    const module = await import(filePath);
    console.log("Module importé avec succès :", module);

    const render = module.default || module[Object.keys(module)[0]];
    console.log("Fonction de rendu trouvée :", render);

    if (typeof render !== "function") {
      console.error(
        "Le module importé ne contient pas de fonction de rendu valide :",
        module
      );
      return;
    }

    const content = render();

    const contentContainer = document.getElementById("content");

    if (!contentContainer) {
      console.error("#content introuvable !");
      return;
    }

    contentContainer.innerHTML = "";

    if (content instanceof HTMLElement) {
      contentContainer.appendChild(content); // Insère l'élément HTML
      console.log("Contenu inséré avec succès :", content);
    } else if (typeof content === "string") {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = content;
      contentContainer.appendChild(tempDiv.firstElementChild); // Insère le contenu HTML sous forme d'élément
      console.log(
        "Contenu inséré sous forme de chaîne :",
        tempDiv.firstElementChild
      );
    } else {
      console.error("Le contenu retourné n'est pas valide :", content);
      contentContainer.innerHTML = "<p>Erreur : contenu invalide.</p>";
    }
  } catch (error) {
    console.error(`Erreur lors du chargement du fichier : ${fileName}`, error);
    const container = document.getElementById("content");
    if (container) {
      container.innerHTML = `
        <p>Contenu indisponible. Assurez-vous que le fichier <strong>${fileName}</strong> existe dans le dossier <strong>${BASE_PATH}</strong>.</p>
      `;
    }
  }
};

// Ajout d'une fonction pour gérer le changement de langue
export const switchLanguage = (isFrench) => {
  const currentPage = "games"; // Remplacez par la logique pour détecter la page actuelle si nécessaire
  loadPageContent(currentPage, isFrench);
};
