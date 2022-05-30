const h2 = document.createElement("h2");
h2.textContent="This content added by Javascript";
document.querySelector('body').appendChild(h2);

const UtahPic = document.getElementByID('Utah');
const ItalyPic = document.getElementByID('Italy');
const HumboldtPic = document.getElementByID('Humboldt');

UtahPic.addEventListener('click', showImage(UtahPic));
ItalyPic.addEventListener('click', showImage(ItalyPic));
HumboldtPic.addEventListener('click', showImage(HumboldtPic));

function showImage(id) {
    .style.display = "block";
}



/*
function hideImage(id) {
    document.getElementById(id)
    .style.display = "none";
}
*/


