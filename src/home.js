import { renderPage } from "./page-rendering";
import createContent from "./create-content";

const renderHome = () => {
    const home = createContent("home",
        `<div class = "home-descript"> <img src = "../dist/image/big-logo.png" alt="big logo"/>`,
        `<h1 class = "title" >WELCOME TO FLASHY ROCK RESTAURANT</h1>`,
        `<h3>DELICIOUS FOOD</h3>`,
        `<p class = "decript-text">We serve all your needs when it comes to african foods, come to us and you will be perfect and great.</p> </div>`,

    );

    renderPage(home);
}

export default renderHome;

