const grid = document.getElementById("productGrid");

if(grid){

function renderProducts(items){

  grid.innerHTML = items.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="product.html?id=${product.id}" class="view-btn">
  View Details
</a>
    </div>
  `).join("");

}

renderProducts(products);
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

if(category){

    const filtered = products.filter(product =>
        product.category === category
    );

    renderProducts(filtered);

}

const filterButtons =
document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
        button.dataset.category;

        if(category === "all"){
            renderProducts(products);
            return;
        }

        const filtered =
        products.filter(product =>
            product.category === category
        );

        renderProducts(filtered);

    });

});

}
const openLogin =
document.getElementById("openLogin");

const closeLogin =
document.getElementById("closeLogin");

const loginPanel =
document.getElementById("loginPanel");

if(openLogin && closeLogin && loginPanel){

openLogin.addEventListener("click", () => {

    loginPanel.classList.add("active");

});

closeLogin.addEventListener("click", () => {

    loginPanel.classList.remove("active");

});

}
const openSearch =
document.getElementById("openSearch");

const closeSearch =
document.getElementById("closeSearch");

const searchOverlay =
document.getElementById("searchOverlay");

if(openSearch && closeSearch && searchOverlay){

openSearch.addEventListener("click", () => {

    searchOverlay.classList.add("active");

});

closeSearch.addEventListener("click", () => {

    searchOverlay.classList.remove("active");

});

}
const searchInput =
document.getElementById("searchInput");

const searchResults =
document.getElementById("searchResults");

if(searchInput && searchResults){

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    searchResults.innerHTML =
    filtered.map(product => `
        <div class="search-item">
            ${product.name}
        </div>
    `).join("");

});

}

const loginForm =
document.getElementById("loginForm");

const signupForm =
document.getElementById("signupForm");

const showSignup =
document.getElementById("showSignup");

const showLogin =
document.getElementById("showLogin");

if(loginForm && signupForm && showSignup && showLogin){

showSignup.addEventListener("click", (e) => {

    e.preventDefault();

    loginForm.style.display = "none";

    signupForm.style.display = "block";

});

showLogin.addEventListener("click", (e) => {

    e.preventDefault();

    signupForm.style.display = "none";

    loginForm.style.display = "block";

});

}
const openMenu =
document.getElementById("openMenu");

const closeMenu =
document.getElementById("closeMenu");

const menuOverlay =
document.getElementById("menuOverlay");

if(openMenu && closeMenu && menuOverlay){

openMenu.addEventListener("click", () => {

    menuOverlay.classList.add("active");

});

closeMenu.addEventListener("click", () => {

    menuOverlay.classList.remove("active");

});

}