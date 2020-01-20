const createContent = (name, ...elements) => {
    const div = document.createElement("div");
    div.setAttribute("id", name);
    let divContent = ` `;

    elements.forEach((element) => {
        divContent += element;
    });

    div.innerHTML = divContent;

    return div;
}

export default createContent;