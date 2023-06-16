   
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

function submutFunction(){

    
   let inputArea = document.getElementsByClassName("input");

   for (let i = 0; i < inputArea.length; i++) {
        inputArea[i].value = 0;
    
   }

   let priceArea = document.getElementsByClassName("price");

   for (let i = 0; i < priceArea.length; i++) {
        priceArea[i].innerText = "$" + 00;
   }

   document.getElementById("subTotal").innerText = 00;

   document.getElementById("Tex").innerText = 00;

    document.getElementById("finalTotal").innerText = 00;
}