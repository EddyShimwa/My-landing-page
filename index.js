const hamburger = document.querySelector(".hamburger");
const crossIcon = document.querySelector(".Cross-Icon");
const menuItems = document.querySelector(".menu-items");

function navToggle() {
  menuItems.classList.toggle("df");
}

hamburger.addEventListener("click", navToggle);
crossIcon.addEventListener("click", navToggle);

var speakers = [
  {
    Image: "/Images/esem.jpg",
    title: "well well",
    name: "Esmeralda Montana",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente modi voluptatibus!.",
  },
  {
    Image: "/Images/PASSS.jpg",
    title: "tiltle",
    name: "Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam animi fugit quia aliquid illo veniam",
  },
  {
    Image: "/Images/shi.jpg",
    title: "tiltle",
    name: "Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam animi fugit quia aliquid illo veniam",
  },
  {
    Image: "/Images/PASSS.jpg",
    title: "tiltle",
    name: "Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam animi fugit quia aliquid illo veniam",
  },
];
const moreBtn = document.createElement("div");
moreBtn.id = "more-btn";
const spanBtn = document.createElement("span");
moreBtn.innerText = "MORE";
moreBtn.appendChild(spanBtn);

const downIcon = document.createElement("img");
(downIcon.src = "/Images/down-button.png"), moreBtn.appendChild(downIcon);
moreBtn.style.display = "none";

const speakersContainer = document.querySelector("#speakers");

for (let i = 0; i < speakers.length; i += 1) {
  console.log(speakers[i].title);

  const speaker = document.createElement("div");
  speaker.classList = "speaker";
  const imageDiv = document.createElement("div");
  imageDiv.classList = "image";

  const image = document.createElement("img");
  image.src = speakers[i].Image;
  imageDiv.appendChild(image);
  speaker.appendChild(imageDiv);

  const details = document.createElement("div");
  details.classList = "Details";

  const speakerName = document.createElement("h3");
  details.appendChild(speakerName);

  speakerName.innerText = speakers[i].name;

  const italics = document.createElement("i");
  italics.innerText = speakers[i].title;
  details.appendChild(italics);

  const horizontalLine = document.createElement("hr");
  details.appendChild(horizontalLine);

  const description = document.createElement("p");
  details.appendChild(description);

  description.innerText = speakers[i].description;

  speaker.appendChild(details);

  speakersContainer.appendChild(speaker);
  speakers[i];
}

var allSpeakers = document.getElementsByClassName("speaker");

console.log(allSpeakers);

var speakersToShow = 2;
var numberOfSpeakers = speakers.length;
for (let i = 0; i < allSpeakers.length; i++) {
  allSpeakers[i].style.display = "none";
  if (i < speakersToShow) {
    allSpeakers[i].style.display = "flex";
  }
}

if (numberOfSpeakers > speakersToShow) {
  moreBtn.style.display = "block";
}

moreBtn.addEventListener('click', function () {
  var showing = Array.from(allSpeakers).filter((s,i) => allSpeakers[i].style.display === "flex").length;
//   for(let i)
  for (var i = showing - 1; i < showing + speakersToShow; i++) {
    allSpeakers[i].style.display = "flex";
  }
  var nowShowing = Array.from(allSpeakers).filter(
    (s,i) => allSpeakers[i].style.display === "flex"
  ).length;
  if (nowShowing >= numberOfSpeakers) {
    moreBtn.style.display = "none";
  }
});
speakersContainer.appendChild(moreBtn);
