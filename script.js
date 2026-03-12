const gallery = document.getElementById("gallery")
const modal = document.getElementById("modal")
const modalImg = document.getElementById("modalImg")
const closeBtn = document.getElementById("close")

const totalPhotos = 12   // change if more photos

for(let i=1;i<=totalPhotos;i++){

let img = document.createElement("img")
img.src = `photos/photo (${i}).jpeg`

img.onclick = function(){
modal.style.display = "flex"
modalImg.src = this.src
}

gallery.appendChild(img)

}

closeBtn.onclick = () =>{
modal.style.display="none"
}

modal.onclick = () =>{
modal.style.display="none"
}