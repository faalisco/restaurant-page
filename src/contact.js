import { renderPage } from "./page-rendering";
import createContent from "./create-content";

const renderContact = () => {
    const contact = createContent("contact",
        `<h1 class = "title" >Contact Us</h1>`,
        `<div class = "contacts-details">
            <span>+220-456-6789</span>
            <a href = "#">flashyrock247@flashyrock.com</a>
            <a href = "#">flashyrock@facebook</a>
        </div>`,
    );

    renderPage(contact);
}

export default renderContact;

