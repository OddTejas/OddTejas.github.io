import { rooms } from "./rooms.js";

let currentRoomIndex = 0;
const collectionTitle = document.querySelector("#clouds-title");
const roomPhoto = document.querySelector(".roomPhoto");
const photoItems = document.querySelectorAll(".roomPhotoItem");
const currentRoom = document.querySelector("#currentRoom")

// button magic --->
const backButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

nextButton.addEventListener("click", function(){
    if (currentRoomIndex < rooms.length - 1) { //checks if the room exists
        currentRoomIndex = currentRoomIndex + 1;
        renderRoom();
    }
});

backButton.addEventListener("click",function(){
    if (currentRoomIndex >0) {
        currentRoomIndex = currentRoomIndex -1;
        renderRoom();
    }
});



function renderRoom() {
    // updating room number on html ---->
    currentRoom.textContent =  `Room ${currentRoomIndex + 1} of ${rooms.length}`;
    //Room title ---->
    const room = rooms[currentRoomIndex];
    collectionTitle.textContent=room.title
    roomPhoto.style.gridTemplateColumns = room.columns;
    roomPhoto.style.gridTemplateRows = room.rows;

    
    //photos ---->
    room.photos.forEach(function(photo, index) {
        const photoItem = photoItems[index];
        const image = photoItem.querySelector("img");
        const caption = photoItem.querySelector("figcaption");

        image.src = photo.src;
        image.alt = photo.alt;
        image.width = photo.width;
        image.height = photo.height;
        caption.textContent = photo.caption;
    });
   
}    
renderRoom();
