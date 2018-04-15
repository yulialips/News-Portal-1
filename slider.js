var locations = new Array("img/img1.jpg","img/img2.png","img/img3.jpg");

var currentImage = 0;

function nextImage() {
  currentImage++;
  if (currentImage === locations.length)
    currentImage = 0;
  document.images["picture"].src = locations[currentImage];
  return false;
}