import { renderPage } from "./page-rendering";
import createContent from "./create-content";

const renderMenu = () => {
    const menu = createContent("menu",
        `
            <div class="menu-wrap">
            <h1 class = "title" >Our perfect Menu</h1>
                <div class = "menu-item">
                    <img src="../dist/image/image1.jpeg" alt=""/>
                    <div class = "menu-item-descrip">
                        <P>description</p>
                        <P>price</p>
                    </div>
                </div>
                <div class = "menu-item">
                    <img src="../dist/image/image2.jpeg" alt=""/>
                    <div class = "menu-item-descrip">
                        <P>description</p>
                        <P>price</p>
                     </div>
                </div>
                <div class = "menu-item">
                    <img src="../dist/image/image3.jpeg" alt=""/>
                    <div class = "menu-item-descrip">
                        <P>description</p>
                        <P>price</p>
                    </div>
                </div>
                <div class = "menu-item">
                    <img src="../dist/image/image4.jpeg" alt=""/>
                    <div class = "menu-item-descrip">
                        <P>description</p>
                        <P>price</p>
                    </div>
                </div>
                <div class = "menu-item">
                    <img src="../dist/image/image5.jpeg" alt=""/>
                    <div class = "menu-item-descrip">
                        <P>description</p>
                        <P>price</p>
                    </div>
                </div>
                <div class = "menu-item">
                    <img src="../dist/image/image6.jpeg" alt=""/>
                    <div class = "menu-item-descrip">
                        <P>description</p>
                        <P>price</p>
                    </div>
                </div>
            </div>
        `
    );

    renderPage(menu);
}

export default renderMenu;

