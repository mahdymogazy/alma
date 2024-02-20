// ___________
var products = [
    {
    id:0,
    title:"Shirt",
    brand:"gucci",
    price:465,
    image:"images/1 (1).jpg",
    category:"bags",
   },
   {
    id:1,
    title:"Shirt",
    brand:"gucci",
    price:465,
    image:"images/1 (1).jpg",
    category:"bags",
   },
   {
    id:2,
    title:"Shirt",
    brand:"gucci",
    price:435,
    image:"images/1 (2).jpg",
    category:"bags",
   },
   {
    id:3,
    title:"Shirt",
    brand:"gucci",
    price:88,
    image:"images/1 (3).jpg",
    category:"bags",
   },
   {
    id:4,
    title:"Shirt",
    brand:"gucci",
    price:435,
    image:"images/1 (4).jpg",
    category:"",
   },
   {
    id:5,
    title:"Shoes",
    brand:"",
    price:348,
    image:"images/1.jpg",
    category:"",
   },
   {
    id:6,
    title:"Shoes",
    brand:"",
    price:1500,
    image:"images/1 (5).jpg",
    category:"smartphones",
   }
  ];

// // Get unique categories from products array
var categories = [...new Set(products.map((item) => 
{return item }))];
  
  var i = 0;
  // Display categories and products in the 'root' element
  document.getElementById('root').innerHTML = categories.map((item) => 
  {
    var { image, title, price } = item;
    return (
      `<div class='h-box'>
        <div class='h-imgBox'>
          <img class='h-images' src=${image}></img>
        </div>
        <div class='h-bottom'>
          <p>${title}</p>
          <h2>${price}.00</h2>`+
         " <button onclick='addtocart(${i++})'>Add to cart</button>" +
       `</div>
      </div>`
    )
  
  }).join('');
//   ________________

var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
// function deleteElement(a){
//     cart.splice(a, 1);
//     displaycart();
// }




function displaycart(a){
    let j=0, total=0;
    document.getElementById('count').innerHTML=cart.length;
    if (cart.length==0){
        document.getElementById('h-cartItem').innerHTML = "Your cart is empty"; 
        document.getElementById('h-cartItem').innerHTML = "$"+0+".00";    
        }
        else{
            document.getElementById('h-cartItem').innerHTML=cart.map((items)=>
            {
                     var{image, title, price} = items;
                     total=total+price;
                     document.getElementById("total").innerHTML= "$ "+total+".00";
                     return (
                        `<div  class='h-cartItem'>
                         <div class='h-row-img'>
                           <img class='rowImg' src=${image} >
                           </div>
                           <p style='font-size:12px;'>${title}</p>
                           <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                           "<i class='fa-solid fa-trash' onclick='deleteElement("+(j++)+")'></i></div>"
                               );
             }).join('');
            
        
        
            }
    
}
    


// __________7
// function myCart(){
  
//   var my_product = document.getElementById('m-products');
//   my_product.className =  "h_col1";
//   var arr = JSON.parse(localStorage.getItem('cart')) ;
  
 
//   for(i=0;i<arr.length;i++){

//     var div = document.createElement('div');
   

//     var title = document.createElement('h2');
//     title.innerHTML=arr[i].title;
  
//     var pic = document.createElement('img');
//     pic.src=arr[i].thumbnail;
  
//     var brand = document.createElement('div');
//     brand.innerHTML=arr[i].brand;
  
//     var category = document.createElement('div')
//     category.innerHTML=arr[i].category;
  
//     var price = document.createElement('div');
//     price.innerHTML=arr[i].price+" $";
    
//     my_product.appendChild(div);
//     div.append(pic,title,category,price);


//   }
  
//   }