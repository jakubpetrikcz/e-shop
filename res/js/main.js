// Put same header and footer
let header = document.getElementsByTagName("header")[0];
let footer = document.getElementsByTagName("footer")[0];
let headerHTML = "";
let footerHTML = "";
headerHTML += 
    `
    <div class="nav-toggle-container">
            <button class="nav-toggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        <nav>
            <ul class="nav-links">
                <li class="dropdown">
                    <a class="nav-link nav-hover" href="./Mobilni Telefony.html">
                        <i class="fas fa-mobile-alt fa-2x"></i>
                        <span>Mobilní telefony</span>
                    </a>
                    <div class="dropdown-content">
                        <a href="./iPhone category.html">
                            <div class="circle-background">
                                <img class="size" src="./img/iphone.png" alt="iPhone">
                            </div>
                            <span>Apple</span>
                        </a>
                        <a href="./Samsung category.html">
                            <div class="circle-background">
                                <img class="size" src="./img/Samsung.png" alt="Samsung">
                            </div>
                            <span>Samsung</span>
                        </a>
                        <a href="#">
                            <div class="circle-background">
                                <img class="size" src="./img/Huawei.png" alt="Huawei">
                            </div>
                            <span>Huawei</span>
                        </a>
                    </div>
                </li>
                
                <li class="dropdown">
                    <a class="nav-link nav-hover" href="#">
                        <i class="fas fa-laptop fa-2x"></i>
                        <span>Notebooky</span>
                    </a>
                    <div class="dropdown-content dropdown-notebooks">
                        <a href="#">
                            <div class="circle-background">
                                <img class="size" src="./img/Macbook.png" alt="Macbook">
                            </div>
                            <span>Apple</span>
                        </a>
                        <a href="#">
                            <div class="circle-background">
                                <img class="size" src="./img/Asus notebook.png" alt="Asus">
                            </div>
                            <span>Asus</span>
                        </a>
                        <a href="#">
                            <div class="circle-background">
                                <img class="size" src="./img/Lenovo notebook.png" alt="Lenovo">
                            </div>
                            <span>Lenovo</span>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a class="nav-link nav-hover" href="#">
                        <i class="fas fa-desktop fa-2x"></i>
                        <span>Počítače</span>
                    </a>
                    <div class="dropdown-content dropdown-notebooks">
                        <a href="#">
                            <div class="circle-background">
                                <img class="size" src="./img/Macbook.png" alt="Macbook">
                            </div>
                            <span>HP</span>
                        </a>
                        <a href="#">
                            <div class="circle-background">
                                <img class="size" src="./img/Asus notebook.png" alt="Asus">
                            </div>
                            <span>Asus</span>
                        </a>
                        <a href="#">
                            <div class="circle-background">
                                <img class="size" src="./img/Lenovo notebook.png" alt="Lenovo">
                            </div>
                            <span>Lenovo</span>
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a class="nav-link nav-hover" href="#">
                        <i class="fas fa-microchip fa-2x"></i>
                        <span>Komponenty</span>
                    </a>
                    <div class="dropdown-content dropdown-width">
                        <div class="dropdown-inline">
                            <a class="dropdown-flex" href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/Procesory.png" alt="Prcesory">
                                </div>
                                <span class="span-width">Procesory</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a class="dropdown-flex" href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/RAM.png" alt="Paměti">
                                </div>
                                <span class="span-width">Paměti</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a class="dropdown-flex" href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/HDD.png" alt="Lenovo">
                                </div>
                                <span class="span-width">HDD a SSD disky</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a class="dropdown-flex" href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/Základní deska.png" alt="Lenovo">
                                </div>
                                <span class="span-width">Základní desky</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a class="dropdown-flex" href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/Skříně a zdroje.png" alt="Lenovo">
                                </div>
                                <span class="span-width">Skříně a zdroje</span>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="dropdown">
                    <a class="nav-link nav-hover" href="#">
                        <i class="fas fa-headphones-alt fa-2x"></i>
                        <span>Sluchátka</span>
                    </a>
                    <div class="dropdown-content dropdown-width">
                        <div class="dropdown-inline">
                            <a href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/AirPods.png" alt="AirPods">
                                </div>
                                <span class="span-width">Apple</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/HyperX Suchatka.png" alt="HyperX">
                                </div>
                                <span class="span-width">HyperX</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/Sony sluchatka.png" alt="Sony">
                                </div>
                                <span class="span-width">Sony</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/Beats sluchatka.png" alt="Beats">
                                </div>
                                <span class="span-width">Beats</span>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="dropdown">
                    <a class="nav-link nav-hover" href="#">
                        <i class="fas fa-tv fa-2x"></i>
                        <span>Televize</span>
                    </a>
                    <div class="dropdown-content dropdown-width">
                        <div class="dropdown-inline">
                            <a href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/Samsung TV.png" alt="Samsung">
                                </div>
                                <span class="span-width">Samsung</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/LG TV.png" alt="LG">
                                </div>
                                <span class="span-width">LG</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/Philips TV.png" alt="Philips">
                                </div>
                                <span class="span-width">Philips</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/Sony TV.png" alt="Sony">
                                </div>
                                <span class="span-width">Sony</span>
                            </a>
                        </div>
                        <div class="dropdown-inline">
                            <a href="#">
                                <div class="circle-background">
                                    <img class="size" src="./img/Panasonic TV.png" alt="Panasonic">
                                </div>
                                <span class="span-width">Panasonic</span>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <a class="account-container" href="#">
            <i class="fas fa-user-circle fa-2x"></i>
            <span>Přihlásit</span>
        </a>
        <a class="shopping-container" href="./Shopping Cart.html">
            <i class="fas fa-shopping-cart fa-2x"></i><span class="product-number">0</span>
        </a>
    `
    header.innerHTML = headerHTML;
    footerHTML += 
    `
    <div class="logo-box">
            <a href="./index.html">
                <img class="logo" src="./img/logo_Etronic_bile.png" alt="Logo">
            </a>
        </div>
        <div class="nav">
            <ul class="links">
                <li>
                    <a class="link" href="#">
                        <span>Aplikace</span>
                    </a>
                </li>
                <li>
                    <a class="link" href="#">
                        <span>Nejčastější dotazy</span>
                    </a>
                </li>
                <li>
                    <a class="link" href="#">
                        <span>Podpora</span>
                    </a>
                </li>
                <li>
                    <a class="link" href="#">
                        <span>Kontakty</span>
                    </a>
                </li>
            </ul>
            <div class="creator-box">
                <span>Designed by Jakub Petřík</span>
            </div>
        </div>
        <div class="social-footer-icons">
            <ul class="social-nav-links">
                <li>
                    <a class="social-nav-link" href="#">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a class="social-nav-link" href="#">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                </li>
            </ul>
            <ul class="social-nav-links social-nav">
                <li>
                    <a class="social-nav-link" href="#">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a class="social-nav-link" href="#">
                        <i class="fab fa-youtube fa-2x"></i>
                    </a>
                </li>
            </ul>
        </div>
    `
    footer.innerHTML = footerHTML;

// Slide Nav
const navSlide = () => {
    const burger = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav-links");

    // Toggle Nav
    burger.addEventListener("click", () => {
        nav.classList.add("nav-links-transition");
        nav.classList.toggle("nav-active");
    });
}

navSlide();


// LoadJSON on carousel
function loadJSON() {
    let productContainer = document.querySelector(".carousel-box");
    if (productContainer) {
        fetch("./res/products.json")
        .then(function(response) {
            return response.json();
        })
        .then(data => {
            let html = "";
            let html1 = "";
            console.log(data.items1);
            data.items1.forEach(function(products){
                html += 
                `<div class="inside-box inside-box-visible" id="firstClone">
                    <a href="${products.link}">
                        <img class="inside-box-img" src="${products.img}" alt="iPhone">
                        <span>${products.name}</span>
                    </a>
                    <div class="price-box">
                        <span class="price">${products.price}</span>
                    </div>
    
                </div>`
                document.querySelectorAll(".carousel-box")[0].innerHTML = html;
            });
            data.items2.forEach(function(products){
                html1 += 
                `<div class="inside-box inside-box-visible" id="firstClone">
                    <a href="${products.link}">
                        <img class="inside-box-img" src="${products.img}" alt="iPhone">
                        <span>${products.name}</span>
                    </a>
                    <div class="price-box">
                        <span class="price">${products.price}</span>
                    </div>
    
                </div>`
                document.querySelectorAll(".carousel-box")[1].innerHTML = html1;
            });
    
        });

    }
}

loadJSON();






// Search input
const products = [
    { name: "Mobilní telefony", link: "Mobilni Telefony.php"},
    { name: "iPhone", link: "iPhone category.php"},
    { name: "iPhone 12 128GB fialová", link: "iphone12_purple.php"},
    { name: 'MacBook Air 13" M1', link: "Apple MacBook Air 13 M1.php"},
    { name: "Asus ROG Zephyrus S GX531GW-ES009T", link: "ASUS ROG Zephyrus S.php"},
    { name: "asus"},
    { name: "Intel Core i9-10900F", link: "Intel Core i9-10900F.php"},
    { name: "samsung"}
];

const list = document.getElementById("list");
var lists = document.getElementsByClassName("list-group-item");

function setList(group) {
    clearList();
    for (const products of group) {
        const item1 = document.createElement("li");
        item1.classList.add("list-group-item");
        const text = document.createTextNode(products.name);
        item1.appendChild(text);
        list.appendChild(item1);
        const item2 = document.createElement("a");
        item2.href = products.link;
        item2.appendChild(text);
        item1.appendChild(item2);
    }

    if (group.length == 0) {
        setNoResult();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function setNoResult() {
    const item = document.createElement("li");
    item.classList.add("no-result");
    const text = document.createTextNode("No results found");
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value == searchTerm) {
        return 2;
    }
    else if (value.startsWith(searchTerm)) {
        return 1;
    }
    else if (value.includes(searchTerm)) {
        return 0;
    }
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", (event) => {
    document.getElementById("list").classList.add("show");
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(products.filter(product => {
            return product.name.toLowerCase().startsWith(value.toLowerCase());
        }).sort((productA, productB) => {
            return getRelevancy(productB.name, value) - getRelevancy(productA.name, value);
        }));
 
        /*
        // adding onclick attribute in all li tag
        let allList = list.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
        */
    }


    else {
        clearList();
    }
});

// Close menu if user clicks outside of it
window.onclick = function(event) {
    if (event.target.className.indexOf("search") == -1) {
        let listGroup = document.getElementsByClassName("list-group");
        for (let i = 0; i < listGroup.length; i++) {
            let openListGroup = listGroup[i];
            if (openListGroup.classList.contains("show")) {
                openListGroup.classList.remove("show");
            }
        }
    }
}



/*
const searchInput = document.getElementById("search");
let list = document.getElementById("list");
var lists = document.getElementsByClassName("list-group-item");


searchInput.addEventListener("input", (e) => {
    list.style.display = "block";
    if (searchInput.value == "") {
        list.style.display = "none";
    }
    var a;
    var filter = searchInput.value.toUpperCase();
    for(let i = 0; i < lists.length; i++) {
        a = lists[i].getElementsByTagName("a")[0];
        var textValue = a.textContent || a.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            lists[i].style.display = "";
        }
        else {
            lists[i].style.display = "none";
        }
    }
});
*/



/* Carousel slider */
let productContainer = document.querySelector(".carousel-box");
if (productContainer) {
    const firstBox = document.querySelectorAll(".carousel-box")[0];
    const SecondBox = document.querySelectorAll(".carousel-box")[1];
    //const slider = box.querySelectorAll(".inside-box");
    const prevBtn = document.querySelectorAll(".previous-button")[0];
    const nextBtn = document.querySelectorAll(".next-button")[0];
    const prevBtn2 = document.querySelectorAll(".previous-button")[1];
    const nextBtn2 = document.querySelectorAll(".next-button")[1];
    const insideBox = document.querySelector(".inside-box");
    const insideBoxes = document.querySelectorAll(".inside-box");
    
    let carouselWidth = document.querySelector(".box").offsetWidth;
    
    console.log(carouselWidth);
    
    
    window.addEventListener("resize", () => {
        
        carouselWidth = document.querySelector(".box").offsetWidth;
    });
    
    //console.log(box.offsetWidth);
    //console.log(carouselWidth);
    //console.log(slider[0].offsetWidth);
    
    let index = 0;
    
    // First Box    
    nextBtn.addEventListener("click", () => {
        index++;
        prevBtn.classList.add("show");
        firstBox.style.transition = "transform 0.4s ease-in-out";
        firstBox.style.transform = `translateX(-${index * carouselWidth}px)`;
        console.log(firstBox.offsetWidth - (index * carouselWidth));
        console.log(carouselWidth);
        if (firstBox.offsetWidth - (index * carouselWidth) <= carouselWidth) {
            nextBtn.classList.add("hide");
        }
    });
    
    
    prevBtn.addEventListener("click", () => {
        index--;
        nextBtn.classList.remove("hide");
        if (index == 0) {
            prevBtn.classList.remove("show");
        }
        firstBox.style.transition = "transform 0.4s ease-in-out";
        firstBox.style.transform = `translateX(-${index * carouselWidth}px)`;
    });
    
    // Second Box
    nextBtn2.addEventListener("click", () => {
        index++;
        prevBtn2.classList.add("show");
        SecondBox.style.transition = "transform 0.4s ease-in-out";
        SecondBox.style.transform = `translateX(-${index * carouselWidth}px)`;
        console.log(SecondBox.offsetWidth - (index * carouselWidth));
        console.log(carouselWidth);
        if (SecondBox.offsetWidth - (index * carouselWidth) <= carouselWidth) {
            nextBtn2.classList.add("hide");
        }
    });
    
    prevBtn2.addEventListener("click", () => {
        index--;
        nextBtn2.classList.remove("hide");
        if (index == 0) {
            prevBtn2.classList.remove("show");
        }
        SecondBox.style.transition = "transform 0.4s ease-in-out";
        SecondBox.style.transform = `translateX(-${index * carouselWidth}px)`;
    });

}
