// remove all btn

const deleteAll = document.querySelector(".deleteAll");
deleteAll.addEventListener("click", function () {
  const items = document.querySelector(".items");

  items.parentNode.removeChild(items);
});


// removing each element or node
let deleteEach = document.querySelectorAll('.link')

for (let i = 0; i < deleteEach.length; i++){
  deleteEach[i].addEventListener('click', function(event)

  {
    btnClicked = event.target
    btnClicked.parentNode.parentNode.remove()
    // let eachItem = document.getElementsByClassName('items')
    
    // for (let i = 0; i < eachItem.length; i++){
    //    console.log(eachItem[i]);
// eachItem[i].children[i].remove();
  // }
  updateTotal()
    }
   
  )
}


// increasing quantity
function quantityIncrease() {
  let plusBtn = document.querySelectorAll(".plus");

  for (let i = 0; i < plusBtn.length; i++) // for(plus of plusBtn)
  {
    plusBtn[i].addEventListener("click", function (event) {
      let btnClicked = event.target;

      let quantityFigure = btnClicked.parentNode.children[1];
      // console.log(quantityFigure);

      let inputValue = quantityFigure.value;
      var newQuantity = parseInt(inputValue) + 1;
      quantityFigure.value = newQuantity
      // console.log(inputValue);

      updateTotal()
      
    });
  }
}
quantityIncrease();

//  decreasing quantity

function quantityDecrease() {
  let minusBtn = document.querySelectorAll(".minus");

  for (let i = 0; i < minusBtn.length; i++) // for(plus of minusBtn)
  {
    minusBtn[i].addEventListener("click", function (e) { let btnClicked = e.target;
      let quantityFigure = btnClicked.parentNode.children[1];
      // console.log(quantityFigureNeg)
      let inputValue =quantityFigure.value;
      let newQuantity = parseInt(inputValue) - 1;
      // console.log (newQuantity)

      if (newQuantity >= 1){
        quantityFigure.value = newQuantity;
      }
      else{
        // alert('QUANTITY HAS TO BE AT LEAST ONE!')
        newQuantity = 1;
      }
      updateTotal()
    });
  }
}
quantityDecrease();


 // price increase 
 function updateTotal(){
  
      let items = document.getElementsByClassName('items')[0];
      let eachItems = items.getElementsByClassName('eachItem');
      let total = 0
      for (let eachItem of eachItems){
        let priceFigure = eachItem.getElementsByClassName('price-figure')[0];

        let quantityFigure = eachItem.getElementsByClassName('quality-figure')[0];

        let price = parseFloat(priceFigure.innerHTML.replace('$' , ''))
        
        let quality = quantityFigure.value
        total = total + (quality * price)
        total = Math.round(total* 100) / 100

         document.getElementsByClassName('total-price')[0].innerText= '$' + total

              console.log( quality * price);

      }

      
 }
