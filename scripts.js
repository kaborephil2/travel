//create a travel class

class travel {
    constructor(destinationName, location, photo, description) {
        this.destinationName = destinationName;
        this.location = location;
        this.photo = photo;
        this.description = description;
    }
}

const form = document.getElementById("form");
const wishList = document.getElementById("wishlist");

    form.addEventListener("submit", function(event){
        event.preventDefault();
    //addItems();
    
    const newText = document.createElement("h3");
    newText.innerHTML ="Hello World!"
    newText.setAttribute("id", "myh3");
    document.getElementById("wishlist").appendChild(newText);
});