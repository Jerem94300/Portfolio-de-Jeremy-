import { Header } from "../component/header.js";
import { expMilitary } from "../component/expMilitaryMain.js";
import { Footer } from "../component/footer.js";





const body = document.querySelector('body');


body.innerHTML = `
    <div class="container">

    ${Header()}
    ${expMilitary()}
    ${Footer()}




    </div>`;



