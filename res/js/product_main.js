
// Load JSON

    


let users = document.querySelector(".product");
let name = document.querySelector(".product-name");
let buy = document.querySelector(".buy-btn");
// console.log(users);
// console.log(name);
// console.log(buy);
//let name = document.getElementsByClassName("product-name")[0].innerText;


/*
const getPage = whichPage => {
    return fetch("./res/products.json")
    .then(response => response.json())
    .then(data => buildPage(whichPage, data))
    .catch(error => console.log(error));
};

const buildPage = (whichPage, products) => {
    if (whichPage == "product") {
        products.forEach(p => console.log(p));
    }
    else {
        let product = products.find(p => p.name == whichPage);
        if (product) {
            console.log(product);
        }
        else {
            console.error("product not found [" + whichPage + "]");
        }
    }
};

getPage("products");
*/

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


