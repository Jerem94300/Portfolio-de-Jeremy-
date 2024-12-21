import { Header } from "../component/header.js";
import { AboutMe } from "../component/aboutMeMain.js";

import { Footer } from "../component/footer.js";


const body = document.querySelector('body');


body.innerHTML = `
    <div class="container">

    ${Header()}
    ${AboutMe()}
    ${Footer()}




    </div>`