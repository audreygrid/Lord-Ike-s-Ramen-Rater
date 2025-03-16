/*          DOM Elements            */

const submit = document.getElementById("submit");

const RName = document.getElementById("ramen-name");
const RRName = document.getElementById("ramen-restaurant");
const RImage = document.getElementById("ramen-image");
const RRating = document.getElementById("ramen-rating");
const RComment = document.getElementById("ramen-comment");

const List = document.getElementById("theList");

const MainImage = document.getElementById("MII");
const MainName = document.getElementById("MainName");
const MainRes = document.getElementById("MainRes");
const MainRating = document.getElementById("MainRating");
const MainComment = document.getElementById("MainComment");

/*          Arrays            */
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "ramens/ramen1.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "ramens/ramen2.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "ramens/ramen3.jpg", rating: 3, comment: "I'm sure it's cool."  }
 ];



/*          All Functions            */

function displayRamens() {
    ramens.forEach((ramen) => {
        const nlist = document.createElement("li");
        const img = document.createElement("img");
        img.className = "ramensImages";
        img.src = ramen.image;
        img.alt = ramen.name;
        
        // Append the image to the list item
        nlist.appendChild(img);
        List.appendChild(nlist);

        // Add the click event listener to load ramen details
        img.addEventListener("click", () => {
            handleClick(ramen);
        });
    });
}


function display_a_Ramen(ramen) { 
    const nlist = document.createElement("li");
    const img = document.createElement("img");
    img.className = "ramensImages";
    img.src = ramen.image;
    img.alt = ramen.name;
    List.appendChild(nlist);
    nlist.appendChild(img); 

    img.addEventListener("click", ()=>{
        handleClick(ramen)
    })
}


function handleClick(ramen) {
    // Update the main image and details based on the selected ramen
    MainImage.src = ramen.image;
    MainName.textContent = ramen.name;
    MainRes.textContent = ramen.restaurant;
    MainRating.textContent = `${ramen.rating}/5`;
    MainComment.textContent = ramen.comment;
}


function addSubmitListener() {
    submit.addEventListener("click", (event)=>{
        event.preventDefault();
        const ramen = {
            id: ramens.length +1,
            name: RName.value,
            restaurant: RRName.value,
            image: RImage.value,
            rating: RRating.value,
            comment: RComment.value,
        }
        ramens.push(ramen);
        display_a_Ramen(ramen);
    })
}

function main() {
    displayRamens()
    addSubmitListener()
    console.log("It's up!")
}

addEventListener("DOMContentLoaded", main());