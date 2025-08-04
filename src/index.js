import "./style.css";

(function() {
    const menuButton = document.querySelector(".menu-button");
    const menuContentContainer = document.querySelector(".menu-content-container");

    function toggleTheMenu() {
        if(menuContentContainer.style.visibility === "visible") {
            console.log(`The menu is now invisible`)
            menuContentContainer.style.visibility = "hidden";
        } else {
            console.log(`The menu is now visible`)
            menuContentContainer.style.visibility = "visible";
        }
    }
    menuButton.addEventListener("click", toggleTheMenu);
})();