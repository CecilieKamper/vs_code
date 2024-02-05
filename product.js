//https://kea-alt-del.dk/t7/api/products/1163

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


fetch("https://kea-alt-del.dk/t7/api/products/"+id)
.then((response)=>response.json())
.then((data)=>showProduct(data));

function showProduct(product){
console.log(product);
document.querySelector(".grid_1_1 h1").textContent=product.productdisplayname;
document.querySelector(".grid_1_1 h2 span").textContent=product.brandname;
document.querySelector(".grid_1_1 h3 span").textContent=product.price;
document.querySelector(".information_boks .artikeltype span").textContent=product.articletype;
document.querySelector(".information_boks .køn span").textContent=product.gender;
document.querySelector(".information_boks .produktionsår span").textContent=product.productionyear;
document.querySelector(".grid_1_1 img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}


//Lav img sti
const productid=123456;
const imagePath=`https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`