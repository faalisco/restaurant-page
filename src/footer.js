const footer = () => {
    const script = document.querySelector("script");

    const body = document.querySelector("body");

    let footerEle = document.createElement("footer");
    footerEle.setAttribute("class", "footer");

    footerEle.innerHTML = `
        <small>Copyright 2020. Created By Ebrima Faal.</small>
    `


    body.insertBefore(footerEle, script);
}

export default footer;