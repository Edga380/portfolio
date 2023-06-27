const galleryFullScreen = document.getElementById("galleryFullScreen");
const cards = document.querySelectorAll(".card");
const smallImages = document.querySelectorAll(".smallImages");
const images = document.querySelectorAll('[id="cardImage"]');
const mainImage = document.getElementById("mainImg");
//
const imagesSrc = [["./images/gallery/strategyGame/strategyGame01.png", "./images/gallery/strategyGame/strategyGame02.png", "./images/gallery/strategyGame/strategyGame03.png", "./images/gallery/strategyGame/strategyGame04.png"],
                ["./images/gallery/bubbleSpaceWars/bubbleSpaceWars01.png", "./images/gallery/bubbleSpaceWars/bubbleSpaceWars02.png", "./images/gallery/bubbleSpaceWars/bubbleSpaceWars03.png", "./images/gallery/bubbleSpaceWars/bubbleSpaceWars04.png"],
                ["./images/gallery/labyrinth2d/labyrinth2d01.png", "./images/gallery/labyrinth2d/labyrinth2d02.png", "./images/gallery/labyrinth2d/labyrinth2d03.png", "./images/gallery/labyrinth2d/labyrinth2d04.png"],
                ["./images/gallery/skGames/skGames01.png", "./images/gallery/skGames/skGames02.png", "./images/gallery/skGames/skGames03.png", "./images/gallery/skGames/skGames04.png"],
                ["./images/gallery/gallery/gallery01.png", "./images/gallery/gallery/gallery02.png", "./images/gallery/gallery/gallery03.png", "./images/gallery/gallery/gallery04.png"],
                ["./images/gallery/movieData/movieData01.png", "./images/gallery/movieData/movieData02.png", "./images/gallery/movieData/movieData03.png", "./images/gallery/movieData/movieData04.png"]
];
//
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        TurnOn(index);
        console.log(images[index].src);
    });
});
//
function TurnOn(index){
    galleryFullScreen.style.display = galleryFullScreen.style.display === "block" ? "none" : "block";
    mainImage.setAttribute("src", images[index].src);
    for (const img in smallImages) {
        smallImages[img].src = imagesSrc[index][img];
    }
};
// 
function TurnOff(){
    galleryFullScreen.style.display = "none";
};
//
smallImages.forEach((smallImage, index) => {
    smallImage.addEventListener("click", () => {
        mainImage.setAttribute("src", smallImages[index].src);
    });
});