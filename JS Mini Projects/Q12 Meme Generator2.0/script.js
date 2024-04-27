const draggable = document.querySelectorAll(".draggable");
const dropZone = document.querySelectorAll(".drop-zone");
const imgUpload = document.getElementById('imgUpload');

// image upload

imgUpload.addEventListener('change', function (e) {
    const imgContainer = document.getElementById('imgContainer');
    const files = e.target.files;

    for(let i = 0; i < files.length; i++){
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add("draggable", "img-size");                                                                                                                                                                     
            img.alt = file.name;
            img.id = "uploadedImage" + i;
            imgContainer.appendChild(img);

            // image drag and drop
            img.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text', e.target.id);
                console.log("test", e.target.id);
            })
        }


        reader.readAsDataURL(file);
    }
})

draggable.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id);
        console.log("test", e.target.id);
    });

    // item.addEventListener("drop", (e) => {
    //     e.preventDefault();
    //     const id = e.dataTransfer.getData("text");
    //     const draggableElem = document.getElementById(id);
    //     item.appendChild(draggableElem);
    // });
});

dropZone.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("bg-gray-400");
    });

    zone.addEventListener("dragleave", (e) => {
        e.preventDefault();
        zone.classList.remove("bg-gray-400");
    });

    zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("bg-gray-400");
        const id = e.dataTransfer.getData("text");
        const draggableElem = document.getElementById(id);
        zone.appendChild(draggableElem);
    });
});
