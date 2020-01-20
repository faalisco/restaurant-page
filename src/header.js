const header = () => {

    const container = document.querySelector("#content");


    let headerEle = document.createElement('header');
    headerEle.setAttribute('class', "header");

    headerEle.innerHTML = `
    <div class = "logo">
        <img src =  "../dist/image/logo.png" alt ="lOgO"/>
    </div>
    <nav class = "nav">
        <a href="#" class = "home-tab tab">HOME<a/>
        <a href="#" class = "menu-tab tab">MENU<a/>
        <a href="#" class = "contact-tab tab">CONTACT<a/>
    </nav>
    `;

    container.appendChild(headerEle);
}

export default header;