import { Header } from "../component/header.js";
import { Games } from "../component/gamesMain.js";

import { Footer } from "../component/footer.js";


const body = document.querySelector('body');


body.innerHTML = `
    <div class="container">

    ${Header()}
    ${Games()}
    ${Footer()}




    </div>`