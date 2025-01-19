export const expMilitary = () => {


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

     // Fonction pour sélectionner les boutons après l'insertion dans le DOM
     const selectBtnDate = () => {
        const btnDate = document.querySelectorAll('.btn__date');
        const mapLocation = document.querySelector('.localisation__image');
        const titleLocation = document.querySelector('.title__location');
        const insigneRgt = document.querySelector('.insigne__rgt');
        const descriptionInsigne = document.querySelector('.description__item0');
        const descriptionItem1 = document.querySelector('.description__item1');
        const descriptionItem2 = document.querySelector('.description__item2');
        const descriptionItem3 = document.querySelector('.description__item3');
        const photoRegiment = document.querySelector('.image__mixRima');
        const dateCurrent = document.querySelector('.dateCurrent');
        console.log(insigneRgt);
        
        
        console.log(btnDate); // Vérifie si les boutons sont trouvés
        btnDate.forEach((btn) => {
            btn.addEventListener('click', () => {
                console.log(`Button ${btn.textContent} clické`);

                 // Vérifie la classe ou un autre attribut pour identifier le bouton
            if (btn.classList.contains("btn__2018__2020")) {
                console.log("Affiche contenu pour 2018-2020");
                mapLocation.src=('/assets/images/martinique.png');
                titleLocation.textContent=("MARTINIQUE");
                insigneRgt.src = ('/assets/images/insigne_33rima.png');
                descriptionInsigne.textContent = ("33° RIMa");
                photoRegiment.src = ('/assets/images/photo_33.jpg')
                descriptionItem1.textContent = ("Head of Divsion of the Command and Logistics Company");
                descriptionItem2.textContent = "";
                descriptionItem3.textContent = "";
                dateCurrent.textContent = btn.textContent


                // Ajoute ici le code spécifique à cette période
            } else if (btn.classList.contains("btn__2020__2024")) {
                console.log("Affiche contenu pour 2020-2024");
                mapLocation.src=('/assets/images/grsIdf.png');
                titleLocation.textContent=("VINCENNES");
                insigneRgt.src = ('/assets/images/insigne_grs.png');
                descriptionInsigne.textContent = ("Groupement de Recrutement et de Selection IDF - OM");
                photoRegiment.src = ('/assets/images/photoRecrutement.jpeg')
                descriptionItem1.textContent = ("Recruitment Consultant");
                descriptionItem2.textContent = "Recruitment Assessor";
                descriptionItem3.textContent = "";
                dateCurrent.textContent = btn.textContent
        
            } else {
                mapLocation.src=('/assets/images/image.png');
                titleLocation.textContent=("ANGOULEME");
                insigneRgt.src = ('/assets/images/Sujet 2.png');
                descriptionInsigne.textContent = ("1er RiMa");
                photoRegiment.src = ('/assets/images/IMG_0456.jpg')
                descriptionItem1.textContent = ("Head of Armoured Peloton");
                descriptionItem2.textContent = ("Deputy Non-Commissioned Officer");
                descriptionItem3.textContent = ("Military of the rank");
                dateCurrent.textContent = btn.textContent

            }





            });
        });
    };

    // Retourne le contenu et exécute la fonction après insertion
    setTimeout(() => {
        selectBtnDate();
    }, 0);



    





        



  


    return `
     <main id="content" class="main">
        <div class="block__dates">
            <div class="btn__2002__2018 btn__date">2002-2018</div>
            <div class="btn__2018__2020 btn__date">2018-2020</div>
            <div class="btn__2020__2024 btn__date">2020-2024</div>
        </div>


        <div class="images__military"></div>
            <div class="dateCurrent"></div>
            <div class="details__date">
                <div class="location__military">
                    <img src="/assets/images/image.png" class="localisation__image" alt="localisation Angouleme">
                    <div class="title__location">ANGOULEME</div>
                   
                </div>

                <div class="block__description">
                    <div class="block__insigne__rgt">
                        <img src="/assets/images/Sujet 2.png" class="insigne__rgt" alt="insigne 1rima">
                    </div>
                    <div class="description__item0">1er RiMa</div>
                   
                </div>

                <div class="images__military">
                    <img src="/assets/images/IMG_0456.jpg" class="image__mixRima" alt="Photos missions">
                     <div class="description__item1">Head of Armoured Peloton</div>
                    <div class="description__item2">Deputy Non-Commissioned Officer</div>
                    <div class="description__item3">Military of the rank</div>
                </div>
            </div>
        




    
      
     </main>

    
      `


  

}



