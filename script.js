const slideshowImages = document.querySelectorAll(".intro .slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;
/*slideshowImages[currentImageCounter].style.display = "block";*/

setInterval(nextImage, nextImageDelay);

function nextImage() {
  /*slideshowImages[currentImageCounter].style.display = "none";*/
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  /*slideshowImages[currentImageCounter].style.display = "block";*/
  slideshowImages[currentImageCounter].style.opacity = 1;
}
/////////////  at this point, I have created the automatic slide show with images with the proper CSS.