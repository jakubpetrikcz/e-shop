// Tabs
function onTabClick(event) {
    let activeTabs = document.querySelectorAll(".active-tab");

    activeTabs.forEach(function(tab) {
        tab.className = tab.className.replace("active-tab", "");
    });

    event.target.parentElement.className += " active-tab";
    document.getElementById(event.target.href.split("#")[1]).className += " active-tab";
}

const element = document.getElementById("nav-tab");

element.addEventListener("click", onTabClick, false);

/*
// Fixed tab
const tabBar = document.getElementById("nav-tab");

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const tabHeight = tabBar.getBoundingClientRect().height;

    if (scrollHeight > 1000) {
        tabBar.classList.add("fixed-tabs");
    }
    else {
        tabBar.classList.remove("fixed-tabs");
    }
});
*/


