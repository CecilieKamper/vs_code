const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch ("https://kea-alt-del.dk/t7/api/products?category="+category)
.then((res)=>res.json())
.then(showProducts);

function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showproduct);
}

function showproduct(product){
    console.log(product);

//fange template
const template=document.querySelector("#smallProductTemplate").content;

//Lave ne kopi
const copy = template.cloneNode(true);

//Lav img sti
const productid=123456;
const imagePath=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`


//Ændre indhold
copy.querySelector("h4").textContent=product.productdisplayname
copy.querySelector(".brand").textContent=product.brandname
copy.querySelector(".pris span").textContent=product.price
copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
copy.querySelector(".rabat span").textContent=product.discount


if(product.soldout){
    //Produkt er udsolgt
}
else{
    copy.querySelector(".soldout").remove();
}

if(product.discount){
    //Produkt er på tilbud
}
else{
    copy.querySelector(".rabat").remove();
}

copy.querySelector(".klikVidere").setAttribute("href", `produkt.html?id=${product.id}`)

//Appende
document.querySelector(".grid").appendChild(copy);

}


// <article class="smallProduct soldOut">
// <img
//   class="udsolgt"
//   src="https://kea-alt-del.dk/t7/images/webp/640/1164.webp"
//   alt=""
// />
// <h4>Blue T20 Indian Cricket Jersey</h4>
// <p class="brand">Nike</p>
// <p class="pris">DKK 1595,-</p>
// <p class="mere">SE MERE</p>
// <p class="soldout">UDSOLGT</p>
// </article>


// "id": 1165,
// "gender": "Men",
// "category": "Apparel",
// "subcategory": "Topwear",
// "articletype": "Tshirts",
// "season": "Summer",
// "productionyear": 2013,
// "usagetype": "Sports",
// "productdisplayname": "Mean Team India Cricket Jersey",
// "price": 2495,
// "discount": 45,
// "brandname": "Nike",
// "soldout": 0