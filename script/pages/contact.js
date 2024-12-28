import { Header } from "../component/header.js";
import { Contact } from "../component/contactMain.js";
import { Footer } from "../component/footer.js";


const body = document.querySelector('body');


body.innerHTML = `
    <div class="container">

    ${Header()}
    ${Contact()}
    ${Footer()}




    </div>`