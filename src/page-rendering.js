const renderPage = (content) => {
    const container = document.querySelector("#content");
    container.appendChild(content);
}

const removePage = () => {
    const container = document.querySelector("#content");
    container.lastChild.remove();
}



export { renderPage, removePage };