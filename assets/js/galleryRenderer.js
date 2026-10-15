import { rooms } from "./rooms.js";

let currentRoomIndex = 0;
const collectionTitle = document.querySelector("#clouds-title");
const roomPhoto = document.querySelector(".roomPhoto");
const photoItems = document.querySelectorAll(".roomPhotoItem");
const currentRoom = document.querySelector("#currentRoom")
const viewer = document.querySelector("#photoViewer");
const viewerImage = document.querySelector("#viewerImage");
const closeViewer = document.querySelector("#closeViewer");
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

photoItems.forEach((item, index) => {
    item.querySelector("img").addEventListener("click", () => {
        const room = rooms[currentRoomIndex];
        const photo = room.photos[index];

        window.location.hash = `${room.id}/${photo.id}`;
    });
});

function openPhotoFromUrl() {
    const [roomId, photoId] = window.location.hash.slice(1).split("/");

    const roomIndex = rooms.findIndex((room) => room.id === roomId);
    const photo = rooms[roomIndex]?.photos.find(
        (photo) => photo.id === photoId
    );

    if (!photo) {
        if (viewer.open) viewer.close();
        return;
    }

    currentRoomIndex = roomIndex;
    renderRoom();

    viewerImage.src = photo.src;
    viewerImage.alt = photo.alt;

    if (!viewer.open) viewer.showModal();
}

function closePhoto() {
    // Remove the hash without reloading or moving the page.
    history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
    );

    viewer.close();
}

closeViewer.addEventListener("click", closePhoto);

viewer.addEventListener("cancel", (event) => {
    event.preventDefault();
    closePhoto();
});

window.addEventListener("hashchange", openPhotoFromUrl);


openPhotoFromUrl();