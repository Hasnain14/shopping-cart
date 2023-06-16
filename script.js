   
let productCount = 0;

function minusFunction(price, product, productNumber){

    let productCount =  parseFloat(document.getElementById(productNumber).value);

    productCount--;

   document.getElementById(productNumber).value = productCount;

   total = price* productCount;

   document.getElementById(product).innerText = "$" + total;

   let finalCost = parseFloat(document.getElementById("finalTotal").innerText);
   finalCost = finalCost - price;

   document.getElementById("finalTotal").innerText = finalCost;

   document.getElementById("subTotal").innerText = finalCost;

}
function plusFunction(price , product, productNumber){
   
   let productCount =  parseFloat(document.getElementById(productNumber).value);

    productCount++;

   document.getElementById(productNumber).value = productCount;

   total = price * productCount;

   document.getElementById(product).innerText = "$" + total;

   let finalCost = parseFloat(document.getElementById("finalTotal").innerText);
   finalCost = finalCost + price;

   document.getElementById("finalTotal").innerText = finalCost;

   document.getElementById("subTotal").innerText = finalCost;
}