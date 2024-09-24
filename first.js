const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");



const grayColor = document.getElementsByClassName("gray");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

const blueColor = document.querySelector(".blue");
const brownColor = document.querySelector(".brown");
const imageCard1 = document.querySelector(".product-image1");
const feedbackBtn1 = document.querySelector(".feedback1");
const itemTag1 = document.getElementsByClassName("tag1")[0];
const cartButton1 = document.getElementById("button1");
const grayColor1 = document.getElementsByClassName("gray1");


const greenColor = document.querySelector(".green");
const blackColor1 = document.querySelector(".black1");
const imageCard2 = document.querySelector(".product-image2");
const feedbackBtn2 = document.querySelector(".feedback2");
const itemTag2 = document.getElementsByClassName("tag2")[0];
const cartButton2 = document.getElementById("button2");
const creamColor = document.getElementsByClassName("cream");


//element.[eventListenerMethod(event, eventHandler)

redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./images/mred2.jpeg")';
});

grayColor[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./images/mgrey.jpeg")';
});

blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./images/mblack.jpeg")';
});

blueColor.addEventListener("click", function () {
    cartButton1.style.backgroundColor = "blue";
    itemTag1.style.backgroundColor = "blue";
    imageCard1.style.backgroundImage = 'url("./images/blue tesla.webp")';
});

grayColor1[0].addEventListener("click", function () {
    cartButton1.style.backgroundColor = "gray";
    itemTag1.style.backgroundColor = "gray";
    imageCard1.style.backgroundImage = 'url("./images/greyt.webp")';
});

brownColor.addEventListener("click", function () {
    cartButton1.style.backgroundColor = "brown";
    itemTag1.style.backgroundColor = "brown";
    imageCard1.style.backgroundImage = 'url("./images/telsab.jpeg")';
});

blackColor1.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "black";
    itemTag2.style.backgroundColor = "black";
    imageCard2.style.backgroundImage = 'url("./images/Audib2.jpeg")';
});

creamColor[0].addEventListener("click", function () {
    cartButton2.style.backgroundColor = "burlywood";
    itemTag2.style.backgroundColor = "burlywood";
    imageCard2.style.backgroundImage = 'url("./images/Audic.jpg")';
});

greenColor.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "green";
    itemTag2.style.backgroundColor = "green";
    imageCard2.style.backgroundImage = 'url("./images/audig2.jpeg")';
});

const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);


const cart1 = () => {
    cartButton1.style.display = "none";
    feedbackBtn1.style.display = "block";
};
cartButton1.addEventListener("click", cart1);

const feedback1 = () => {
    cartButton1.style.display = "block";
    feedbackBtn1.style.display = "none";
};
feedbackBtn1.addEventListener("click", feedback1);

const cart2 = () => {
    cartButton2.style.display = "none";
    feedbackBtn2.style.display = "block";
};
cartButton2.addEventListener("click", cart2);

const feedback2 = () => {
    cartButton2.style.display = "block";
    feedbackBtn2.style.display = "none";
};
feedbackBtn2.addEventListener("click", feedback2);
