const removeHeaderHomepage =document.getElementById("header-homepage-section");
const removeBodyHomepage =document.getElementById("body-homepage-section");
const addHeaderAboutpage =document.getElementById("header-about-section");
const addBodyAboutpage =document.getElementById("body-about-section");

const removeFooter = document.getElementById("homepage-section-footer")
const popupMenu = document.getElementById("mobileMenu")
const menuItem = document.querySelector(".pop");
const footer = document.getElementById("footer");
const aboutFooterColor = document.getElementById("about-section-footer");
const footerTextColors = document.querySelectorAll(".change-color");


menuItem.style.display = "none";


function removeHome() {
    console.log("working")
    removeHeaderHomepage.style.display = "none";
    removeBodyHomepage.style.display = "none";
    removeFooter.style.display = "none";
    addHeaderAboutpage.style.display = "block";
    addBodyAboutpage.style.display = "block";
    aboutFooterColor.style.background = "#272A31";
    document.getElementById("color").style.color = "white";
    document.getElementById("color1").style.color = "white";
    document.getElementById("color2").style.color = "white";
    document.getElementById("color3").style.color = "white";
    document.getElementById("color4").style.color = "white";


}

function restoreHome() {
    console.log("working")
    removeHeaderHomepage.style.display = "block";
    removeBodyHomepage.style.display = "block";
    removeFooter.style.display = "block";
    addHeaderAboutpage.style.display = "none";
    addBodyAboutpage.style.display = "none";
    aboutFooterColor.style.background = "white";
    document.getElementById("color").style.color = "#272A31";
    document.getElementById("color1").style.color = "#272A31";
    document.getElementById("color2").style.color = "#272A31";
    document.getElementById("color3").style.color = "#272A31";
    document.getElementById("color4").style.color = "#272A31";


}

popupMenu.addEventListener("click", () =>  {
    menuItem.classList.add("window");
    menuItem.style.display = "block";
    console.log("working");


});    

function removeMobileHome() {
    console.log("working")
    removeHeaderHomepage.style.display = "none";
    removeBodyHomepage.style.display = "none";
    addHeaderAboutpage.style.display = "block";
    addBodyAboutpage.style.display = "block";
    menuItem.style.display = "none";
    footer.style.display = "block";


}

function restoreMobileHome() {
    console.log("working")
    removeHeaderHomepage.style.display = "block";
    removeBodyHomepage.style.display = "block";
    removeFooter.style.display = "block";
    addHeaderAboutpage.style.display = "none";
    addBodyAboutpage.style.display = "none";
    footer.style.display = "none";
    menuItem.style.display = "none";

}

function exit() {
    menuItem.style.display = "none";
}


const data = [

    {
        name: "Josh SB",
        title: "TonicA ng example, two ",
        position: "Back End DevA grid item can become a grid container.",
        image:  "media/artist4.jpeg"
    },

    {  
       name: "Salle",
       title: "Tonic",
       position: "Back End DevA grid item can become a grid container. In the following example,",
       image: "media/artist2.jpeg",
    },

    {  
       name: "Terri",
       title: "Tonic",
       position: "Back End Dev A grid item can become a grid container.item can become a grid container. In the following example,",
       image: "media/artist3.jpeg",
    },

    {  
       name: "Max",
       title: "TonicA gtwo ",
       position: "Back End Dev A grid item can become a grid container. In the following example,",
       image: "media/artist1.jpeg",
    },


    {  
        name: "Kuti",
        title: "TonicA grid item can become a grid container.",
        position: "A grid item can become a grid container. In the following example, two positioned items. In this case the first",
        image: "media/artist6.jpeg",
     },
   
     {
        name: "Asap Rocky",
        title: "A grid item can become a grid container. In",
        position: "Back End DevA grid item can become a grid container.",
        image:  "media/artist.jpeg"
    },
]


function artist(info) {
return `<div class="box">
    <img src="${info.image}" alt="image" class="picture">
    <div class="textHolder">
        <h2 class="artistName">${info.name}</h2>
        <h5 class="doings">${info.title}</h5>
        <hr class="line">
        <p class="description">${info.position}</p>
    </div>
  </div>`
    
}

const BodyHomepage =document.getElementById("body-homepage-section");
const featured = document.createElement("div");
featured.setAttribute("class", "featured");

const featuredLineBox = document.createElement("div");
featuredLineBox.setAttribute("class", "featuredLineBox");
const line = document.createElement("hr");
line.setAttribute("class", "hr");
const text = document.createElement("h2");
text.textContent = "Top Rated Artists"

featuredLineBox.appendChild(text);
featuredLineBox.appendChild(line);

featured.appendChild(featuredLineBox);

const artistSection = document.createElement("div");
artistSection.className = "artists";

for (let i = 0; i < data.length; i++) {
    artistSection.innerHTML += artist(data[i]);
  }
console.log(artist(data))

featured.appendChild(artistSection)
BodyHomepage.appendChild(featured);