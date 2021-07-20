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


// Search input
const products = [
    { name: "Mobilní telefony", link: "Mobilni Telefony.html"},
    { name: "iPhone", link: "iPhone category.html"},
    { name: "iPhone 12 128GB fialová", link: "iphone12_purple.html"},
    { name: 'MacBook Air 13" M1', link: "Apple MacBook Air 13 M1.html"},
    { name: "Asus ROG Zephyrus S GX531GW-ES009T", link: "ASUS ROG Zephyrus S.html"},
    { name: "asus"},
    { name: "Intel Core i9-10900F", link: "Intel Core i9-10900F.html"},
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
