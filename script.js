   
let productCount = 0;

function minusFunction(price, product, productNumber){

    let productCount =  parseFloat(document.getElementById(productNumber).value);

    productCount--;

   document.getElementById(productNumber).value = productCount;

   total = price* productCount;

   document.getElementById(product).innerText = "$" + total;

   let finalCost = parseFloat(document.getElementById("subTotal").innerText);
   finalCost = finalCost - price;

   let Tex = (finalCost*5)/100;

   document.getElementById("subTotal").innerText = finalCost;

   document.getElementById("Tex").innerText = Tex;

   document.getElementById("finalTotal").innerText = finalCost + Tex;

}
function plusFunction(price , product, productNumber){
   
   let productCount =  parseFloat(document.getElementById(productNumber).value);

    productCount++;

   document.getElementById(productNumber).value = productCount;

   total = price * productCount;

   document.getElementById(product).innerText = "$" + total;

   let finalCost = parseFloat(document.getElementById("subTotal").innerText);
   finalCost = finalCost + price;

   let Tex = (finalCost*5)/100;

   document.getElementById("subTotal").innerText = finalCost;

   document.getElementById("Tex").innerText = Tex;

   document.getElementById("finalTotal").innerText = finalCost + Tex;
}