import { Header } from "../component/header.js";
import { Home } from "../component/home.js";
import { Footer } from "../component/footer.js";

const body = document.querySelector('body');


body.innerHTML = `
    <div class="container">

    ${Header()}
    ${Home()}
    ${Footer()}

  

    </div>





`

