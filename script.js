const images = document.querySelectorAll('.draggable-image');
const dropZone = document.getElementById('dropZone');

images.forEach(image => {
    image.addEventListener('dragstart', (e) => {
        console.log("drag start");
        e.dataTransfer.setData('text/plain', e.target.src);
        console.log(e.dataTransfer);
    });
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log("drag over");
})

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const imageSrc = e.dataTransfer.getData('text/plain');
    const image = document.createElement('img');
    image.src = imageSrc;
    image.className = 'dropped-image';
    dropZone.appendChild(image);


    const droppeImages = document.querySelectorAll('.dropped-image');
    droppeImages.forEach(image => {
        image.addEventListener('mousedown', deleteImage);
    })
})


function deleteImage(e) {
    this.parentElement.removeChild(this);
}

