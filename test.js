var products = {
    data: [
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (32).jpg"
        },
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (33).jpg"
        },
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (34).jpg"
        },
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (35).jpg"
        },
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (36).jpg"
        },
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (37).jpg"
        },
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (38).jpg"
        },
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (39).jpg"
        },
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (40).jpg"
        },
        {
            name:"T-shirt",
            category: "T-shirt",
            price: "50",
            image: "images/1 (41).jpg"
        },
        {
            name:"Shirt",
            category: "Shirt",
            price: "50",
            image: "images/1 (1).jpg"
        },
        {
            name:"Shirt",
            category: "Shirt",
            price: "50",
            image: "images/1 (2).jpg"
        },
        {
            name:"Shirt",
            category: "Shirt",
            price: "50",
            image: "images/1 (3).jpg"
        },
        {
            name:"Shirt",
            category: "Shirt",
            price: "50",
            image: "images/1 (4).jpg"
        },
        {
            name:"Shirt",
            category: "Shirt",
            price: "50",
            image: "images/1.jpg"
        },
        {
            name:"Shoes",
            category: "Shoes",
            price: "50",
            image: "images/1 (5).jpg"
        },
        {
            name:"Shoes",
            category: "Shoes",
            price: "50",
            image: "images/1 (6).jpg"
        },
        {
            name:"Shoes",
            category: "Shoes",
            price: "50",
            image: "images/1 (7).jpg"
        },
        {
            name:"Shoes",
            category: "Shoes",
            price: "50",
            image: "images/1 (8).jpg"
        },
        {
            name:"Shoes",
            category: "Shoes",
            price: "50",
            image: "images/1 (9).jpg"
        },
        {
            name:"Shoes",
            category: "Shoes",
            price: "50",
            image: "images/1 (10).jpg"
        },
        {
            name:"Shoes",
            category: "Shoes",
            price: "50",
            image: "images/1 (11).jpg"
        },
        {
            name:"Glasses",
            category: "Glasses",
            price: "50",
            image: "images/1 (12).jpg"
        },
        {
            name:"Glasses",
            category: "Glasses",
            price: "50",
            image: "images/1 (13).jpg"
        },
        {
            name:"Glasses",
            category: "Glasses",
            price: "50",
            image: "images/1 (14).jpg"
        },
        {
            name:"Glasses",
            category: "Glasses",
            price: "50",
            image: "images/1 (15).jpg"
        },
        {
            name:"Glasses",
            category: "Glasses",
            price: "50",
            image: "images/1 (16).jpg"
        },
        {
            name:"Bags",
            category: "Bags",
            price: "50",
            image: "images/1 (17).jpg"
        },
        {
            name:"Bags",
            category: "Bags",
            price: "50",
            image: "images/1 (18).jpg"
        },
        {
            name:"Bags",
            category: "Bags",
            price: "50",
            image: "images/1 (19).jpg"
        },
        {
            name:"Bags",
            category: "Bags",
            price: "50",
            image: "images/1 (20).jpg"
        },
        {
            name:"Bags",
            category: "Bags",
            price: "50",
            image: "images/1 (21).jpg"
        },
        {
            name:"Bags",
            category: "Bags",
            price: "50",
            image: "images/1 (22).jpg"
        },
        {
            name:"Bags",
            category: "Bags",
            price: "50",
            image: "images/1 (23).jpg"
        },
        {
            name:"Watches",
            category: "Watches",
            price: "50",
            image: "images/1 (24).jpg"
        },
        {
            name:"Watches",
            category: "Watches",
            price: "50",
            image: "images/1 (25).jpg"
        },
        {
            name:"Watches",
            category: "Watches",
            price: "50",
            image: "images/1 (26).jpg"
        },
        {
            name:"Watches",
            category: "Watches",
            price: "50",
            image: "images/1 (27).jpg"
        },
        {
            name:"Watches",
            category: "Watches",
            price: "50",
            image: "images/1 (28).jpg"
        },
        {
            name:"Watches",
            category: "Watches",
            price: "50",
            image: "images/1 (29).jpg"
        },
        {
            name:"Watches",
            category: "Watches",
            price: "50",
            image: "images/1 (30).jpg"
        },
        {
            name:"Watches",
            category: "Watches",
            price: "50",
            image: "images/1 (31).jpg"
        },
    ],
};

// for(var i of products.data){
//     //create card
//     var card = document.createElement("div");
//     // card category
//     card.classList.add("card", "i.category");
//     //image div
//     var imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");
//     //img tag
//     var image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);
//     //container
//     var container = document.createElement("div");
//     container.classList.add("container");
//     //productname
//     var name = document.createElement("h5");
//     name.classList.add("name");
//     name.innerText = i.name.toUpperCase();
//     container.appendChild(name);
//     //price
//     var price = document.createElement("h6");
//     price.innerText = "$" + i.price;
//     container.appendChild(price);

//     document.getElementById("products").appendChild(card);
// }
// function performSearch() {
//     // Get the search input value
//     var searchInput = document.getElementById("searchInput").value.toLowerCase();
  
//     // Clear previous search results
//     var searchResultsContainer = document.getElementById("searchResults");
//     searchResultsContainer.innerHTML = "";
  
//     // Perform the search logic
//     // This could involve searching through an array or making an API request
  
//     // Display the search results
//     // This could involve creating HTML elements dynamically and appending them to the searchResultsContainer
  
//     // Example: Display a sample result
//     var result = document.createElement("p");
//     result.textContent = "Sample search result";
//     searchResultsContainer.appendChild(result);
//   }

//     var searchInput = document.getElementById("searchInput");
//     searchInput.addEventListener("input", performSearch);


function search(){
    var searchbox = document.getElementById("search-item").value.toUpperCase();
    var storeitems = document.getElementById("product-list");
    var product = document.querySelectorAll(".product");
    var pname = document.getElementsByTagName("h4");

    for(var i = 0 ; i < pname.length ; i++){
        var match = product[i].getElementsByTagName('h4')[0];
        
        if(match){
            var textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = " ";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}