document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background = "linear-gradient(135deg, rgb(102, 126 , 234), rgb(118 , 75 , 162))";
document.body.style.fontFamily = "sans-serif arial";

const container = document.createElement("div");
container.style.textAlign = "center";

const heading = document.createElement("h1");
heading.innerText = "Image Toggler";
heading.style.color = "white";
heading.style.marginBottom = "20px";

const box = document.createElement("div");
box.style.width = "280px";
box.style.height = "280px";
box.style.background = "rgba(255,255,255,0.15)";
box.style.borderRadius = "20px";
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.boxShadow = "0 15px 30px rgba(0,0,0,0.4)";

const img = document.createElement("img");
img.style.width = "90%";
img.style.height = "90%";
img.style.objectFit = "cover";
img.style.borderRadius = "15px";
img.style.border = "4px solid white";

const images = [
    "https://picsum.photos/id/1040/400/400",
    "https://picsum.photos/id/1050/400/400",
    "https://picsum.photos/id/1060/400/400"
];

let index = 0;
img.src = images[index];

setInterval(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
}, 1000);

box.appendChild(img);
container.appendChild(heading);
container.appendChild(box);
document.body.appendChild(container);
