const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));

const product = products.find(
    p => p.id === productId
);

if(product){

    document.getElementById("productImage").src =
    product.image;

    document.getElementById("productImage").alt =
    product.name;

    document.getElementById("productName").textContent =
    product.name;

    document.getElementById("productPrice").textContent =
    product.price;

    document.getElementById("productCategory").textContent =
    product.category.toUpperCase();

}