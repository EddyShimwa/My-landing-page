const hamburger = document.querySelector('.hamburger');
const crossIcon = document.querySelector('.Cross-Icon');
const menuItems = document.querySelector('.menu-items');

function navToggle() {
  menuItems.classList.toggle('df');
}

hamburger.addEventListener('click', navToggle);
crossIcon.addEventListener('click', navToggle);

const speakers = [
  {
    Image: './Images/speaker-4.png',
    title: 'General manager',
    name: 'Esmeralda Montana',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Image: './Images/speaker-1.png',
    title: 'Vice-Director ',
    name: 'Becker Allison',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Image: './Images/speaker-2.png',
    title: 'General Director',
    name: 'Frank Ghosh',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Image: './Images/speaker-3.png',
    title: 'Executive manager',
    name: 'Claudine Besker',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Image: './Images/speaker-2.png',
    title: 'Director in Social affairs',
    name: 'Frank Ghosh',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Image: './Images/speaker-3.png',
    title: 'Human Resources',
    name: 'Claudine Besker',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Image: './Images/speaker-3.png',
    title: 'Human Resources',
    name: 'Claudine Besker',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];
const moreBtn = document.createElement('div');
moreBtn.id = 'more-btn';
const spanBtn = document.createElement('span');
moreBtn.innerText = 'MORE';
moreBtn.appendChild(spanBtn);

const downIcon = document.createElement('img');
downIcon.src = '/Images/down-button.png';
moreBtn.appendChild(downIcon);
moreBtn.style.display = 'none';

const speakersContainer = document.querySelector('#speakers');

for (let i = 0; i < speakers.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.classList = 'speaker';
  const imageDiv = document.createElement('div');
  imageDiv.classList = 'image';

  const image = document.createElement('img');
  image.src = speakers[i].Image;
  imageDiv.appendChild(image);
  speaker.appendChild(imageDiv);

  const details = document.createElement('div');
  details.classList = 'Details';

  const speakerName = document.createElement('h3');
  details.appendChild(speakerName);

  speakerName.innerText = speakers[i].name;

  const italics = document.createElement('i');
  italics.innerText = speakers[i].title;
  details.appendChild(italics);

  const horizontalLine = document.createElement('hr');
  details.appendChild(horizontalLine);

  const description = document.createElement('p');
  details.appendChild(description);

  description.innerText = speakers[i].description;

  speaker.appendChild(details);

  speakersContainer.appendChild(speaker);
}

const allSpeakers = document.getElementsByClassName('speaker');

const speakersToShow = 6;
const numberOfSpeakers = speakers.length;
for (let i = 0; i < allSpeakers.length; i += 1) {
  allSpeakers[i].style.display = 'none';
  if (i < speakersToShow) {
    allSpeakers[i].style.display = 'flex';
  }
}

if (numberOfSpeakers > speakersToShow) {
  moreBtn.style.display = 'block';
}

moreBtn.addEventListener('click', () => {
  const showing = Array.from(allSpeakers).filter((s, i) => allSpeakers[i].style.display === 'flex').length;
  //   for(let i)
  for (let i = showing - 1; i < showing + speakersToShow; i += 1) {
    allSpeakers[i].style.display = 'flex';
  }
  const nowShowing = Array.from(allSpeakers).filter(
    (s, i) => allSpeakers[i].style.display === 'flex',
  ).length;
  if (nowShowing >= numberOfSpeakers) {
    moreBtn.style.display = 'none';
  }
});
speakersContainer.appendChild(moreBtn);
