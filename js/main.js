function changeImage() {
	document.getElementById('picture').src ='img/org.jpg';
}
document.getElementById('btn').addEventListener('click', changeImage, false);
function originalImage(){
	document.getElementById('picture').src = 'img/orange.png';
}
document.getElementById('btn2').addEventListener('click', originalImage, false);

