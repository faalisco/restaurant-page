import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";
import header from "./header";
import footer from "./footer";
import { removePage } from "./page-rendering";

header();


renderHome();

document.querySelector(".nav").addEventListener("click", (e) => {
    if (e.target.classList.contains("home-tab")) {
        removePage();
        renderHome();
    } else if (e.target.classList.contains("menu-tab")) {
        removePage();
        renderMenu();
    } else if (e.target.classList.contains("contact-tab")) {
        removePage();
        renderContact();
    }
})


// renderContact();



footer();