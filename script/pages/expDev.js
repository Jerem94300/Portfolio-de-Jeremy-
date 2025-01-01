import { getIcones } from "./utils/api.js";
import { Header } from "../component/header.js";
import { ExpDev } from "../component/expDevMain.js";
import { Footer } from "../component/footer.js";



const displayData = (data) => {
const body = document.querySelector('body');


body.innerHTML = `
    <div class="container">

    ${Header()}
    ${ExpDev(data)}
    ${Footer()}




    </div>`;
}


(async () => {
   


    // Récupération des icones
    const data = await getIcones();
   

    displayData(data);
    


})();