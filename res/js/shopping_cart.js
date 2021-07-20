if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}
else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName("btn-danger");
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity-input");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName("buy-btn");
    console.log(addToCartButtons);
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    let productNumbers = localStorage.getItem("cartNumbers");
    
    let cartQuantity = document.getElementsByClassName("cart-quantity-input");
    
    productName = buttonClicked.parentElement.parentElement.children[0].textContent.trim();
    console.log(productName);
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    buttonClicked.parentElement.parentElement.remove();
    localStorage.setItem("cartNumbers", productNumbers - cartItems[productName].inCart);
    delete cartItems[productName];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    
    updateCartTotal();
    onLoadCartNumbers();

}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    let cartQuantity = document.getElementsByClassName("cart-quantity-input");
    let buttonClicked = event.target.value;
    let button = event.target;
    console.log(buttonClicked);
    let productName = button.parentElement.parentElement.children[0].textContent.trim();
    console.log(productName);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let total = 0;
    for (let i = 0; i < cartQuantity.length; i++) {

        let y = parseInt(cartQuantity[i].value);
        total += y; 
        cartItems[productName].inCart = parseInt(buttonClicked);
    }
    localStorage.setItem("cartNumbers", JSON.stringify(total));
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    updateCartTotal();
    onLoadCartNumbers();
}

function addToCartClicked() {

    var title = document.getElementsByClassName("product-name")[0].innerText;
    var price = document.getElementsByClassName("price-container")[0].innerText;
    var imageSrc = document.getElementsByClassName("picture-js")[0].src;
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let Items = [{
        title: title,
        price: price, 
        imageSrc: imageSrc, 
        inCart: 0
    }];

    for (let i = 0; i < Items.length; i++) {
        item = Items[i];
        if (cartItems != null) {
    
            if (cartItems[item.title] == undefined) {
                cartItems = {
                    ...cartItems,
                    [item.title]: item
                }
            }
            cartItems[item.title].inCart += 1;
        }
        else {
            item.inCart = 1;
            cartItems = {
                [item.title]: item
            }
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    cartNumbers();
    
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector(".product-number").textContent = productNumbers;
    }

    if (productNumbers == 0) {
        localStorage.clear();
    }
}

function cartNumbers(action) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (action) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector(".product-number").textContent = productNumbers - 1;
    }
    else if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".product-number").textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".product-number").textContent = 1;
    }
}


function addItemToCart() {

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-items");
    
    if (cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="cart-item-container">
                    <div class="cart-item">
                        <div class="cart-item-img">
                            <img src="${item.imageSrc}" alt="">
                        </div>
                        <span class="cart-item-title">${item.title}</span>
                    </div>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="${item.inCart}" min="1" max="999">
                    </div>
                    <div class="cart-price-container">
                        <span class="cart-price cart-column">${item.price}</span>
                    </div>
                    <button class="btn btn-danger" type="button">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `
        });
        updateCartTotal();
    }
    
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-item-container");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        var price = parseFloat(priceElement.innerText.replace("Kč", "").replace(" ", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = ((total + " Kč").replace(/\B(?=(\d{3})+(?!\d))/g, " "));
}

addItemToCart();
onLoadCartNumbers();




