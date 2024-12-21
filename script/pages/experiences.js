import { Header } from "../component/header.js";
import { Experiences } from "../component/experiencesMain.js";

import { Footer } from "../component/footer.js";


const body = document.querySelector('body');


body.innerHTML = `
    <div class="container">

    ${Header()}
    ${Experiences()}

    ${Footer()}




    </div>`