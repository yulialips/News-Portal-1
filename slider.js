var imgs = new array("img/img1.jpg","img/img2.png","img/img3.jpg");

var i = 0;

function nextimage() {
  i++;
  if (i === imgs.length)
    i = 0;
  document.images["picture"].src = imgs[i];
  return false;
}
function backimage() {
i--;
  if (i === imgs.length)
    i=0;
  document.images["picture"].src = imgs[i];
  return false;
}
